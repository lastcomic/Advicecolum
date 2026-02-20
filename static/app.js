/*
 * THE SECOND OPINION — Frontend Logic
 * Typewriter effect, API integration, audio playback
 */

(function () {
  "use strict";

  // DOM elements
  const inputSection = document.getElementById("inputSection");
  const loadingSection = document.getElementById("loadingSection");
  const responseSection = document.getElementById("responseSection");
  const errorMessage = document.getElementById("errorMessage");

  const letterForm = document.getElementById("letterForm");
  const nameField = document.getElementById("nameField");
  const locationField = document.getElementById("locationField");
  const questionField = document.getElementById("questionField");
  const charCount = document.getElementById("charCount");
  const sendBtn = document.getElementById("sendBtn");

  const byline = document.getElementById("byline");
  const articleBody = document.getElementById("articleBody");
  const cursor = document.getElementById("cursor");

  const audioSection = document.getElementById("audioSection");
  const audioBtn = document.getElementById("audioBtn");
  const anotherBtn = document.getElementById("anotherBtn");
  const soundToggle = document.getElementById("soundToggle");

  // State
  let soundEnabled = true;
  let fullArticleText = "";
  let isTyping = false;
  let audioElement = null;
  let audioPlaying = false;
  let typewriterAbort = null;

  // Audio context for typewriter clicks
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }

  // Typewriter click sound using Web Audio API
  function playClickSound() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = "square";
      osc.frequency.setValueAtTime(1200 + Math.random() * 400, ctx.currentTime);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.02);
    } catch (_) {
      // Silently fail if audio isn't available
    }
  }

  // Character count
  questionField.addEventListener("input", function () {
    charCount.textContent = questionField.value.length;
  });

  // Sound toggle
  soundToggle.addEventListener("click", function () {
    soundEnabled = !soundEnabled;
    soundToggle.querySelector(".sound-on").style.display = soundEnabled ? "" : "none";
    soundToggle.querySelector(".sound-off").style.display = soundEnabled ? "none" : "";
  });

  // Form submission
  letterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    submitLetter();
  });

  // Write another letter
  anotherBtn.addEventListener("click", function () {
    stopAudio();
    responseSection.classList.remove("visible");
    audioSection.classList.remove("visible");
    inputSection.style.display = "";
    errorMessage.classList.remove("visible");
    questionField.value = "";
    charCount.textContent = "0";
    nameField.focus();
  });

  // Audio button
  audioBtn.addEventListener("click", function () {
    if (audioPlaying) {
      stopAudio();
    } else {
      playArticle();
    }
  });

  function showError(msg) {
    loadingSection.classList.remove("visible");
    errorMessage.textContent = msg;
    errorMessage.classList.add("visible");
    sendBtn.disabled = false;
    inputSection.style.display = "";
  }

  async function submitLetter() {
    const name = nameField.value.trim();
    const location = locationField.value.trim();
    const question = questionField.value.trim();

    if (!name || !location || !question) {
      showError("Please fill in your name, location, and question.");
      return;
    }

    // Reset state
    sendBtn.disabled = true;
    errorMessage.classList.remove("visible");
    responseSection.classList.remove("visible");
    audioSection.classList.remove("visible");
    articleBody.innerHTML = "";
    fullArticleText = "";
    isTyping = false;

    // Hide input, show loading
    inputSection.style.display = "none";
    loadingSection.classList.add("visible");

    // Intentional pause for anticipation (3-4 seconds)
    await delay(3000 + Math.random() * 1000);

    try {
      const res = await fetch("/api/article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, location, question }),
      });

      if (!res.ok) {
        let errMsg = "Something went wrong.";
        try {
          const err = await res.json();
          errMsg = err.error || errMsg;
        } catch (_) {}
        showError(errMsg);
        return;
      }

      // Hide loading, show response
      loadingSection.classList.remove("visible");
      responseSection.classList.add("visible");
      byline.textContent = "On the matter of " + name + " from " + location;

      // Stream the response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let streamedText = "";

      // Collect all streamed text first, then typewrite it
      const textChunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              break;
            }
            if (data.startsWith("[ERROR]")) {
              showError(data.slice(8));
              return;
            }
            textChunks.push(data);
          }
        }
      }

      streamedText = textChunks.join("");
      fullArticleText = streamedText;

      // Start typewriter effect
      await typewriteArticle(streamedText);

    } catch (err) {
      showError(err.message || "Could not connect to the server.");
    }
  }

  async function typewriteArticle(text) {
    isTyping = true;
    const abortController = { aborted: false };
    typewriterAbort = abortController;

    // Parse text into paragraphs
    const paragraphs = text.split(/\n\n+/).filter(function (p) {
      return p.trim();
    });

    cursor.classList.add("active");
    articleBody.innerHTML = "";

    let charIndex = 0;

    for (let pi = 0; pi < paragraphs.length; pi++) {
      if (abortController.aborted) break;

      const pText = paragraphs[pi].trim();
      const p = document.createElement("p");
      articleBody.appendChild(p);

      // Drop cap for first paragraph
      let startIdx = 0;
      if (pi === 0 && pText.length > 0) {
        const dropCap = document.createElement("span");
        dropCap.className = "drop-cap";
        dropCap.textContent = pText[0];
        p.appendChild(dropCap);
        startIdx = 1;

        playClickSound();
        await delay(getCharDelay(pText[0]));
        charIndex++;
      }

      // Type out each character
      let textNode = document.createTextNode("");
      p.appendChild(textNode);

      for (let ci = startIdx; ci < pText.length; ci++) {
        if (abortController.aborted) break;

        const char = pText[ci];
        textNode.textContent += char;
        charIndex++;

        // Play click every 3rd character
        if (charIndex % 3 === 0) {
          playClickSound();
        }

        // Move cursor position
        moveCursorAfter(p);

        await delay(getCharDelay(char));
      }

      // Extra pause between paragraphs
      if (pi < paragraphs.length - 1) {
        await delay(200);
      }
    }

    cursor.classList.remove("active");
    isTyping = false;
    typewriterAbort = null;

    // Show audio section with fade-up
    setTimeout(function () {
      audioSection.classList.add("visible");
    }, 300);
  }

  function getCharDelay(char) {
    const base = 20;
    const variance = (Math.random() - 0.5) * 10; // ±5ms
    const punctuation = ".,:;—!?";

    if (punctuation.indexOf(char) !== -1) {
      return base + variance + 50;
    }
    if (char === "\n") {
      return base + 30;
    }
    return Math.max(5, base + variance);
  }

  function moveCursorAfter(element) {
    // Position cursor inline after the last text content
    if (cursor.parentNode) {
      cursor.parentNode.removeChild(cursor);
    }
    element.appendChild(cursor);
  }

  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  async function playArticle() {
    if (!fullArticleText) return;

    audioBtn.textContent = "Loading...";
    audioBtn.disabled = true;

    try {
      const res = await fetch("/api/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: fullArticleText }),
      });

      if (!res.ok) {
        let errMsg = "Voice generation failed.";
        try {
          const err = await res.json();
          errMsg = err.error || errMsg;
        } catch (_) {}
        audioBtn.textContent = "\u25B6 Read It To Me";
        audioBtn.disabled = false;
        showError(errMsg);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      audioElement = new Audio(url);
      audioElement.addEventListener("ended", function () {
        stopAudio();
      });
      audioElement.addEventListener("error", function () {
        stopAudio();
        showError("Audio playback failed.");
      });

      audioElement.play();
      audioPlaying = true;
      audioBtn.textContent = "\u25A0 Stop";
      audioBtn.classList.add("playing");
      audioBtn.disabled = false;

    } catch (err) {
      audioBtn.textContent = "\u25B6 Read It To Me";
      audioBtn.disabled = false;
      showError("Could not generate audio.");
    }
  }

  function stopAudio() {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement = null;
    }
    audioPlaying = false;
    audioBtn.textContent = "\u25B6 Read It To Me";
    audioBtn.classList.remove("playing");
  }

  // Keyboard shortcut: Cmd/Ctrl+Enter to submit
  questionField.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      submitLetter();
    }
  });

})();
