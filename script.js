// State & Data
const scenario = {
  startNode: 't1',
  nodes: {
    t1: { type: 'therapist', speaker: 'Therapist', text: "Good afternoon, Sarah. How have things been since our last session?", audioPath: 'audio/d1.mp3', image: 'therapist.jpg', next: 'p1' },
    p1: { type: 'patient', speaker: 'Sarah', text: "It’s been a rough week. I keep thinking I’m failing at work. Every small mistake feels huge.", audioPath: 'audio/p1.mp3', image: 'sarah_sad.jpg', moodText: 'Overwhelmed', next: 't2' },
    t2: { type: 'therapist', speaker: 'Therapist', text: "Can you walk me through a recent situation where you felt that way?", audioPath: 'audio/t2.mp3', next: 'p2' },
    p2: { type: 'patient', speaker: 'Sarah', text: "Yesterday my supervisor corrected part of a report I submitted. After that, I couldn’t stop thinking, “I’m terrible at my job.”", audioPath: 'audio/p2.mp3', image: 'sarah_sad.jpg', moodText: 'Ashamed', next: 'q1' },

    q1: {
      type: 'choice',
      prompt: "How could you potentially respond to this client’s reaction with an effective CBT response? Select all that apply.",
      options: [
        { text: "“That’s not true at all. You’ll be fine if you think about the situation.”", isCorrect: false, feedback: "This response minimizes emotion and misses an opportunity for cognitive restructuring." },
        { text: "“What suggests that a small correction makes you terrible at your job?”", isCorrect: true, feedback: "This response promotes cognitive flexibility and encourages evidence examination." },
        { text: "“I think you might be overreacting a bit to the situation.”", isCorrect: false, feedback: "This response minimizes emotion and can be invalidating for the client." },
        { text: "“What does the small correction mean to you?”", isCorrect: true, feedback: "This response effectively explores the underlying meaning behind the event." }
      ],
      nextNode: 't3'
    },

    t3: { type: 'therapist', speaker: 'Therapist', text: "When that thought came up — “I’m terrible at my job” — how intense was your anxiety from 0 to 10?", audioPath: 'audio/t3.mp3', next: 'p3' },
    p3: { type: 'patient', speaker: 'Sarah', text: "Probably an 8.", audioPath: 'audio/p3.mp3', image: 'sarah_anxious.jpg', moodText: 'Anxious', next: 't4' },
    t4: { type: 'therapist', speaker: 'Therapist', text: "And what emotions did you notice besides anxiety?", audioPath: 'audio/t4.mp3', next: 'p4' },
    p4: { type: 'patient', speaker: 'Sarah', text: "Shame. Embarrassment. I also felt hopeless.", audioPath: 'audio/p4.mp3', image: 'sarah_sad.jpg', moodText: 'Hopeless', next: 'q2' },

    q2: {
      type: 'choice',
      prompt: "How could you potentially respond to this client’s reaction with an effective CBT response? Select all that apply.",
      options: [
        { text: "You just need to think more positively.", isCorrect: false, feedback: "This response promotes toxic positivity rather than addressing the core emotion." },
        { text: "Things could be worse.", isCorrect: false, feedback: "This response is invalidating of her current feelings." },
        { text: "When people feel hopeless, it can become hard to notice exceptions or progress.", isCorrect: true, feedback: "Normalizing the feeling helps the client move toward behavioral activation." },
        { text: "What small change would feel realistic to you?", isCorrect: true, feedback: "This response effectively moves the client toward actionable behavioral activation." }
      ],
      nextNode: 't5'
    },

    t5: { type: 'therapist', speaker: 'Therapist', text: "Let’s slow the moment down. Your supervisor corrected part of your report. What evidence did your mind use to conclude that you’re terrible at your job?", audioPath: 'audio/t5.mp3', image: 'therapist_speaking.jpg', next: 'p5' },
    p5: { type: 'patient', speaker: 'Sarah', text: "Well… the report had errors.", audioPath: 'audio/p5.mp3', image: 'sarah_sad.jpg', moodText: 'Defeated', next: 't6' },
    t6: { type: 'therapist', speaker: 'Therapist', text: "Okay. Were there any facts that might not support the conclusion?", audioPath: 'audio/t6.mp3', next: 'p6' },
    p6: { type: 'patient', speaker: 'Sarah', text: "I guess the rest of the report was fine. And my supervisor said the corrections were “minor.”", audioPath: 'audio/p6.mp3', image: 'sarah.jpg', moodText: 'Neutral', next: 't7' },
    t7: { type: 'therapist', speaker: 'Therapist', text: "That’s important. Sometimes our thoughts jump from “I made a mistake” to “I’m incompetent.” That’s a cognitive distortion called overgeneralization. Does that fit what happened?", audioPath: 'audio/t7.mp3', next: 'p7' },
    p7: { type: 'patient', speaker: 'Sarah', text: "Yeah, definitely. I turned one mistake into proof that I’m a failure.", audioPath: 'audio/p7.mp3', image: 'sarah_sad.jpg', moodText: 'Reflective', next: 't8' },
    t8: { type: 'therapist', speaker: 'Therapist', text: "If a coworker made the same mistake, would you think they were terrible at their job?", audioPath: 'audio/t8.mp3', next: 'p8' },
    p8: { type: 'patient', speaker: 'Sarah', text: "No. I’d probably think they were just human.", audioPath: 'audio/p8.mp3', image: 'sarah_kind.jpg', moodText: 'Empathetic', next: 'q3' },

    q3: {
      type: 'choice',
      prompt: "How could you potentially respond to this client’s reaction with an effective CBT response? Select all that apply.",
      options: [
        { text: "Nobody’s perfect.", isCorrect: false, feedback: "Generic reassurance is less effective than exploring the cognitive distortion." },
        { text: "You are being too hard on yourself.", isCorrect: false, feedback: "This response does not challenge the underlying rigid belief system." },
        { text: "What makes it harder to apply the same standard to yourself?", isCorrect: true, feedback: "This encourages balanced thinking and exploration of the client's standards." },
        { text: "What might be a more balanced definition of success?", isCorrect: true, feedback: "This response effectively explores the client's cognitive rules and assumptions." }
      ],
      nextNode: 't9'
    },

    t9: { type: 'therapist', speaker: 'Therapist', text: "What makes it harder to apply that same standard to yourself?", audioPath: 'audio/t9.mp3', next: 'p9' },
    p9: { type: 'patient', speaker: 'Sarah', text: "I feel like I’m supposed to be perfect all the time.", audioPath: 'audio/p9.mp3', image: 'sarah_anxious.jpg', moodText: 'Stressed', next: 't10' },
    t10: { type: 'therapist', speaker: 'Therapist', text: "That sounds like a very rigid rule. Where do you think that expectation comes from?", audioPath: 'audio/t10.mp3', next: 'p10' },
    p10: { type: 'patient', speaker: 'Sarah', text: "Growing up, mistakes weren’t really tolerated in my house. My parents focused a lot on achievement.", audioPath: 'audio/p10.mp3', image: 'sarah_hesitant.jpg', moodText: 'Vulnerable', next: 'q4' },

    q4: {
      type: 'choice',
      prompt: "How could you potentially respond to this client’s reaction with an effective CBT response?",
      options: [
        { text: "That history can shape automatic beliefs. Let’s try reframing the original thought. Instead of 'I’m terrible at my job,' what might be a more balanced statement?", isCorrect: true, feedback: "This explores cognitive rules and assumptions to help restructure the thought." },
        { text: "You are being too hard on yourself.", isCorrect: false, feedback: "This response does not challenge the rigid belief system effectively." }
      ],
      nextNode: 't11'
    },

    t11: { type: 'therapist', speaker: 'Therapist', text: "That history can shape automatic beliefs. Let’s try reframing the original thought. Instead of “I’m terrible at my job,” what might be a more balanced statement?", audioPath: 'audio/t11.mp3', next: 'p11' },
    p11: { type: 'patient', speaker: 'Sarah', text: "Maybe… “I made a mistake, but that doesn’t mean I’m bad at my job.”", audioPath: 'audio/p11.mp3', image: 'sarah.jpg', moodText: 'Thinking', next: 't12' },
    t12: { type: 'therapist', speaker: 'Therapist', text: "How believable does that feel right now, from 0 to 100 percent?", audioPath: 'audio/t12.mp3', next: 'p12' },
    p12: { type: 'patient', speaker: 'Sarah', text: "Around 60 percent.", audioPath: 'audio/p12.mp3', image: 'sarah.jpg', moodText: 'Uncertain', next: 'q5' },

    q5: {
      type: 'choice',
      prompt: "How could you potentially respond to this client’s reaction with an effective CBT response? Select all that apply.",
      options: [
        { text: "That’s a good start. What happens to your anxiety level when you say the balanced thought?", isCorrect: true, feedback: "This encourages evidence examination and incorporates emotion scaling." },
        { text: "Just stop worrying about what people think.", isCorrect: false, feedback: "This response is dismissive and relies on advice-giving without exploration." },
        { text: "That’s good enough.", isCorrect: false, feedback: "This is dismissive and ends exploration prematurely." },
        { text: "You should accept that you will have some anxiety about making a mistake.", isCorrect: false, feedback: "This is dismissive of the client's valid emotional experience." }
      ],
      nextNode: 't13'
    },

    t13: { type: 'therapist', speaker: 'Therapist', text: "That’s a good start. What happens to your anxiety level when you say the balanced thought?", audioPath: 'audio/t13.mp3', next: 'p13' },
    p13: { type: 'patient', speaker: 'Sarah', text: "It drops to maybe a 4.", audioPath: 'audio/p13.mp3', image: 'sarah_relieved.jpg', moodText: 'Relieved', next: 't14' },
    t14: { type: 'therapist', speaker: 'Therapist', text: "Great. That tells us the thought itself is influencing the emotional reaction. For homework this week, I’d like you to keep a thought record. When you notice strong self-criticism, write down: 1. The situation 2. The automatic thought 3. The emotion and intensity 4. Evidence for and against the thought 5. A more balanced replacement thought.", audioPath: 'audio/t14.mp3', next: 'p14' },
    p14: { type: 'patient', speaker: 'Sarah', text: "Okay, I can do that.", audioPath: 'audio/p14.mp3', image: 'sarah_relieved.jpg', moodText: 'Determined', next: 't15' },
    t15: { type: 'therapist', speaker: 'Therapist', text: "Before we end, what’s one thing you’re taking away from today’s session?", audioPath: 'audio/t15.mp3', next: 'p15' },
    p15: { type: 'patient', speaker: 'Sarah', text: "I think I realized I treat my mistakes as proof that something is wrong with me, instead of seeing them as normal.", audioPath: 'audio/p15.mp3', image: 'sarah_relieved.jpg', moodText: 'Relieved', next: 'q6' },

    q6: {
      type: 'choice',
      prompt: "How could you potentially respond to this client’s reaction with an effective CBT response? Select all that apply.",
      options: [
        { text: "That’s an important insight. We will continue to challenge those perfectionistic beliefs next session.", isCorrect: true, feedback: "This effectively connects thoughts, emotions, and behaviors for the client." },
        { text: "What makes you think there is something wrong with you?", isCorrect: false, feedback: "This can be invalidating at this stage of the summary." },
        { text: "You have a lot going for you.", isCorrect: false, feedback: "This relies on reassurance rather than reinforcing cognitive skills." },
        { text: "How would you evaluate this thought if a friend said it?", isCorrect: true, feedback: "This encourages perspective-taking, which is a key cognitive restructuring skill." }
      ],
      nextNode: 't16'
    },

    t16: { type: 'therapist', speaker: 'Therapist', text: "That’s an important insight. We’ll continue working on challenging those perfectionistic beliefs next session.", audioPath: 'audio/t16.mp3', next: 'p16' },
    p16: { type: 'patient', speaker: 'Sarah', text: "Thank you. This actually feels helpful.", audioPath: 'audio/p16.mp3', image: 'sarah_smiling.jpg', moodText: 'Hopeful', next: 't17' },
    t17: { type: 'therapist', speaker: 'Therapist', text: "I’m glad to hear that. See you next week.", audioPath: 'audio/t17.mp3', image: 'therapist_smiling.jpg', next: 'end' }
  }
};

let currentAudio = null;
let timerInterval = null;
let secondsElapsed = 0;
let isPaused = false;
let isMuted = false;
let currentPlayingNode = null;
let isWaitingForNext = false;
let pendingNextNode = null;
let fallbackInterval = null;
const visitedNodes = new Set();
const totalNodes = Object.keys(scenario.nodes).length;

// Navigation state
let nodeHistory = [];
let currentNodeId = null;
let isGoingBack = false;

// DOM Elements
const els = {
  startScreen: document.getElementById('start-screen'),
  controlsPanel: document.getElementById('controls-panel'),
  btnCloseControls: document.getElementById('btn-close-controls'),
  callUI: document.getElementById('call-ui'),
  hudOverlay: document.getElementById('hud-overlay'),
  hudCard: document.querySelector('.hud-card'),
  finalScreen: document.getElementById('final-screen'),
  btnStart: document.getElementById('btn-start'),
  btnControls: document.getElementById('btn-controls'),
  btnPause: document.getElementById('btn-pause'),
  btnMute: document.getElementById('btn-mute'),
  btnNext: document.getElementById('btn-next'),
  btnPrev: document.getElementById('btn-prev'),
  btnToggleTranscript: document.getElementById('btn-toggle-transcript'),
  btnCloseTranscript: document.getElementById('btn-close-transcript'),
  transcriptPanel: document.getElementById('transcript-panel'),
  transcriptContent: document.getElementById('transcript-content'),
  timeDisplay: document.getElementById('time-display'),
  progressText: document.getElementById('progress-text'),
  progressBarFill: document.getElementById('progress-bar-fill'),
  therapistContainer: document.getElementById('therapist-container'),
  therapistVideo: document.querySelector('#therapist-container .video-feed'),
  patientContainer: document.getElementById('patient-container'),
  patientVideo: document.getElementById('patient-video'),
  patientMoodBadge: document.getElementById('patient-mood-badge'),
  hudTitle: document.getElementById('hud-title'),
  hudPrompt: document.getElementById('hud-prompt'),
  hudOptions: document.getElementById('hud-options'),
  btnSubmitHud: document.getElementById('btn-submit-hud'),
  finalAssessment: document.getElementById('final-assessment')
};

const therapistTalkingImages = ['therapist_speaking.jpg', 'therapist_talking_warm.jpg', 'therapist_talking_serious.jpg'];
let therapistImageIndex = 0;

// Initialize
els.btnStart.addEventListener('click', startTour);
els.btnControls.addEventListener('click', () => toggleControlsPanel(els.controlsPanel.classList.contains('hidden')));
els.btnCloseControls.addEventListener('click', () => toggleControlsPanel(false));
els.btnPause.addEventListener('click', togglePause);
els.btnMute.addEventListener('click', toggleMute);
els.btnToggleTranscript.addEventListener('click', () => toggleTranscript(els.transcriptPanel.classList.contains('hidden')));
els.btnCloseTranscript.addEventListener('click', () => toggleTranscript(false));
els.btnNext.addEventListener('click', advanceNext);
els.btnPrev.addEventListener('click', advancePrevious);

document.addEventListener('keydown', (e) => {
  if (!els.startScreen.classList.contains('hidden')) return;
  if (!els.hudOverlay.classList.contains('hidden')) return;
  if (!els.finalScreen.classList.contains('hidden')) return;

  if (e.code === 'Space' || e.code === 'ArrowRight') {
    e.preventDefault();
    advanceNext();
  }
});

function startTour() {
  els.startScreen.classList.add('hidden');
  els.callUI.classList.remove('hidden');

  const driverObj = window.driver.js.driver({
    showProgress: true,
    onDestroyStarted: () => {
      driverObj.destroy();
      if (!timerInterval) startSimulation();
    },
    steps: [
      { element: '.video-area', popover: { title: 'Video Call', description: 'This is the simulated video call with Sarah. She will react dynamically to your choices.', side: "left", align: 'start' } },
      { element: '#btn-controls', popover: { title: 'Cheat Sheet', description: 'Click here anytime to open a quick guide of the controls without interrupting the session.', side: "top", align: 'center' } },
      { element: '#btn-mute', popover: { title: 'Mute', description: 'Find the audio distracting? You can mute the voices here.', side: "top", align: 'center' } },
      { element: '#btn-pause', popover: { title: 'Pause', description: 'Need a break? Pause the simulation here.', side: "top", align: 'center' } },
      { element: '#btn-toggle-transcript', popover: { title: 'Live Transcript', description: 'Click this button to open the conversation history at any time. It updates automatically.', side: "top", align: 'center' } },
      { element: '#btn-prev', popover: { title: 'Previous', description: 'Missed something? Step backward through the dialogue line-by-line.', side: "top", align: 'center' } },
      { element: '#btn-next', popover: { title: 'Advance', description: 'Advance the dialogue manually. You can also press Spacebar or Right Arrow.', side: "top", align: 'center' } }
    ]
  });

  driverObj.drive();
}

function toggleControlsPanel(show) {
  if (show) els.controlsPanel.classList.remove('hidden');
  else els.controlsPanel.classList.add('hidden');
}

function toggleTranscript(show) {
  if (show) els.transcriptPanel.classList.remove('hidden');
  else els.transcriptPanel.classList.add('hidden');
}

function regenerateTranscript() {
  els.transcriptContent.innerHTML = '';
  const allNodes = [...nodeHistory];
  if (currentNodeId && !allNodes.includes(currentNodeId)) {
    allNodes.push(currentNodeId);
  }

  allNodes.forEach((id, index) => {
    const node = scenario.nodes[id];
    if (node && (node.type === 'patient' || node.type === 'therapist')) {
      const p = document.createElement('p');
      p.className = `transcript-entry ${node.speaker.toLowerCase()}`;
      if (index === allNodes.length - 1) {
        p.classList.add('animate-entry');
      }
      p.innerHTML = `<strong>${node.speaker}:</strong> ${node.text}`;
      els.transcriptContent.appendChild(p);
    }
  });
  els.transcriptContent.scrollTop = els.transcriptContent.scrollHeight;
}

function updateProgress(nodeId) {
  if (!visitedNodes.has(nodeId)) {
    visitedNodes.add(nodeId);
    let pct = Math.round((visitedNodes.size / totalNodes) * 100);
    if (pct > 100) pct = 100;
    if (els.progressText && els.progressBarFill) {
      els.progressText.textContent = `${pct}%`;
      els.progressBarFill.style.width = `${pct}%`;
    }
  }
}

function toggleMute() {
  isMuted = !isMuted;
  if (isMuted) {
    els.btnMute.innerHTML = '🔇 Unmute';
    els.btnMute.classList.add('danger');
    els.btnMute.classList.remove('secondary');
    if (currentAudio) currentAudio.volume = 0;
    window.speechSynthesis.cancel();
  } else {
    els.btnMute.innerHTML = '🔊 Mute';
    els.btnMute.classList.remove('danger');
    els.btnMute.classList.add('secondary');
    if (currentAudio) currentAudio.volume = 1;
  }
}

function togglePause() {
  isPaused = !isPaused;
  if (isPaused) {
    els.btnPause.innerHTML = '▶ Resume';
    els.btnPause.classList.add('primary');
    els.btnPause.classList.remove('secondary');

    if (currentAudio) currentAudio.pause();
    else window.speechSynthesis.pause();

    document.querySelectorAll('.active-speaker').forEach(el => el.classList.remove('active-speaker'));
  } else {
    els.btnPause.innerHTML = '⏸ Pause';
    els.btnPause.classList.remove('primary');
    els.btnPause.classList.add('secondary');

    if (currentPlayingNode) {
      const isPatient = currentPlayingNode.type === 'patient';
      els.patientContainer.classList.toggle('active-speaker', isPatient);
      els.therapistContainer.classList.toggle('active-speaker', !isPatient);
    }

    if (currentAudio) currentAudio.play().catch(e => console.error(e));
    else window.speechSynthesis.resume();

    // Resume auto-advance if we were paused while waiting for the next node
    if (isWaitingForNext && pendingNextNode) {
      setTimeout(() => {
        if (isWaitingForNext && !isPaused) {
          advanceNext();
        }
      }, 1000);
    }
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (fallbackInterval) {
    clearInterval(fallbackInterval);
    fallbackInterval = null;
  }
  window.speechSynthesis.cancel();
  els.patientContainer.classList.remove('active-speaker');
  els.therapistContainer.classList.remove('active-speaker');
  els.patientContainer.classList.remove('finished-speaker');
  els.therapistContainer.classList.remove('finished-speaker');
}

function advanceNext() {
  if (isPaused) return;

  if (!els.hudOverlay.classList.contains('hidden')) {
    const node = scenario.nodes[currentNodeId];
    if (node && node.type === 'choice') {
      els.hudOverlay.classList.add('hidden');
      isGoingBack = false;
      playNode(node.nextNode);
    }
    return;
  }

  if (!currentPlayingNode && !isWaitingForNext) return;



  if (currentPlayingNode) {
    const nextId = currentPlayingNode.next;
    stopAudio();
    currentPlayingNode = null;
    isWaitingForNext = false;
    pendingNextNode = null;
    isGoingBack = false;
    if (nextId) playNode(nextId);
  } else if (isWaitingForNext) {
    const nextId = pendingNextNode;
    stopAudio();
    isWaitingForNext = false;
    pendingNextNode = null;
    isGoingBack = false;
    if (nextId) playNode(nextId);
  }
}

function advancePrevious() {
  if (isPaused) return;

  if (!els.hudOverlay.classList.contains('hidden')) {
    els.hudOverlay.classList.add('hidden');
  }

  if (nodeHistory.length > 0) {
    const prevId = nodeHistory.pop();
    isGoingBack = true;
    stopAudio();
    currentPlayingNode = null;
    isWaitingForNext = false;
    pendingNextNode = null;
    playNode(prevId);
  }
}

function startSimulation() {
  if (timerInterval) return; // Already started

  timerInterval = setInterval(() => {
    if (!isPaused) secondsElapsed++;
    const m = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const s = String(secondsElapsed % 60).padStart(2, '0');
    els.timeDisplay.textContent = `${m}:${s}`;
  }, 1000);

  setTimeout(() => {
    playNode(scenario.startNode);
  }, 500);
}

function speak(node) {
  currentPlayingNode = node;
  stopAudio();
  regenerateTranscript();

  const isPatient = node.type === 'patient';

  els.patientContainer.classList.toggle('active-speaker', isPatient);
  els.therapistContainer.classList.toggle('active-speaker', !isPatient);



  const handleEnd = () => {
    els.patientContainer.classList.remove('active-speaker');
    els.therapistContainer.classList.remove('active-speaker');
    els.patientContainer.classList.toggle('finished-speaker', isPatient);
    els.therapistContainer.classList.toggle('finished-speaker', !isPatient);
    currentPlayingNode = null;
    isWaitingForNext = true;
    pendingNextNode = node.next;


    // Automatically advance the conversation after a 1-second grace period
    if (pendingNextNode) {
      setTimeout(() => {
        if (isWaitingForNext && !isPaused) {
          advanceNext();
        }
      }, 1000);
    }
  };

  // Mute behavior is now handled by setting volume to 0

  if (node.audioPath) {
    currentAudio = new Audio(node.audioPath);
    if (isMuted) currentAudio.volume = 0; // Just in case
    currentAudio.onended = () => {
      if (!isPaused) handleEnd();
    };
    currentAudio.play().catch(e => {
      if (e.name !== 'AbortError') fallbackSpeak(node, isPatient, handleEnd);
    });
  } else {
    fallbackSpeak(node, isPatient, handleEnd);
  }
}

function fallbackSpeak(node, isPatient, onEnd) {
  if (isMuted) {
    const wordCount = node.text.split(/\s+/).length;
    let remainingTimeMs = wordCount * 250 + 1000;

    fallbackInterval = setInterval(() => {
      if (!isPaused) {
        remainingTimeMs -= 100;
        if (remainingTimeMs <= 0) {
          clearInterval(fallbackInterval);
          fallbackInterval = null;
          onEnd();
        }
      }
    }, 100);
    return;
  }

  const utterance = new SpeechSynthesisUtterance(node.text);
  const voices = window.speechSynthesis.getVoices();

  if (isPatient) {
    utterance.pitch = 1.1;
    utterance.rate = 0.95;
    const femaleVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Victoria'));
    if (femaleVoice) utterance.voice = femaleVoice;
  } else {
    utterance.pitch = 0.95;
    utterance.rate = 1.0;
  }

  utterance.onend = () => {
    if (!isPaused) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

function playNode(nodeId) {
  if (nodeId === 'end') {
    endSimulation();
    return;
  }

  const node = scenario.nodes[nodeId];
  if (!node) return;

  if (currentNodeId && !isGoingBack) {
    nodeHistory.push(currentNodeId);
  }
  currentNodeId = nodeId;

  node.id = nodeId;
  updateProgress(nodeId);
  els.hudOverlay.classList.add('hidden');

  // Update patient image and mood badge to reflect the correct historical state
  let activePatientNode = node.type === 'patient' ? node : null;
  if (!activePatientNode) {
    for (let i = nodeHistory.length - 1; i >= 0; i--) {
      if (scenario.nodes[nodeHistory[i]] && scenario.nodes[nodeHistory[i]].type === 'patient') {
        activePatientNode = scenario.nodes[nodeHistory[i]];
        break;
      }
    }
  }

  if (activePatientNode) {
    if (activePatientNode.image && els.patientVideo) {
      els.patientVideo.src = activePatientNode.image;
    } else if (els.patientVideo) {
      els.patientVideo.src = 'sarah.jpg';
    }

    if (activePatientNode.moodText && els.patientMoodBadge) {
      els.patientMoodBadge.textContent = `Mood: ${activePatientNode.moodText}`;
      els.patientMoodBadge.classList.remove('hidden');
    } else if (els.patientMoodBadge) {
      els.patientMoodBadge.classList.add('hidden');
    }
  } else {
    if (els.patientVideo) els.patientVideo.src = 'sarah.jpg';
    if (els.patientMoodBadge) els.patientMoodBadge.classList.add('hidden');
  }

  // Loop therapist images for therapist dialogue
  if (node.type === 'therapist' && els.therapistVideo) {
    if (node.image) {
      els.therapistVideo.src = node.image;
    } else {
      therapistImageIndex = (therapistImageIndex + 1) % therapistTalkingImages.length;
      els.therapistVideo.src = therapistTalkingImages[therapistImageIndex];
    }
  } else if (node.type === 'patient' && els.therapistVideo) {
    els.therapistVideo.src = 'therapist_listening.jpg'; // listening when patient speaks
  }

  if (node.type === 'patient' || node.type === 'therapist') {
    speak(node);
  } else if (node.type === 'choice') {
    showChoices(node);
  }
}

function showChoices(node) {
  els.hudPrompt.textContent = node.prompt;
  els.hudOptions.innerHTML = '';
  els.btnSubmitHud.classList.remove('hidden');
  els.btnSubmitHud.disabled = false;
  els.btnSubmitHud.textContent = 'Submit Response';

  const oldFb = els.hudCard.querySelector('.feedback-text');
  if (oldFb) oldFb.remove();
  const oldContinue = els.hudCard.querySelector('.btn-continue-dynamic');
  if (oldContinue) oldContinue.remove();

  const checkboxes = [];

  node.options.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.className = 'option-label';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.value = idx;

    const textSpan = document.createElement('span');
    const letter = String.fromCharCode(65 + idx); // A, B, C, D...
    textSpan.innerHTML = `<span class="option-letter">${letter}.</span> ${opt.text}`;

    label.appendChild(cb);
    label.appendChild(textSpan);
    els.hudOptions.appendChild(label);

    checkboxes.push({ cb, label, opt });
  });

  const newSubmit = els.btnSubmitHud.cloneNode(true);
  els.btnSubmitHud.replaceWith(newSubmit);
  els.btnSubmitHud = newSubmit;

  let hasSubmitted = false;

  els.btnSubmitHud.addEventListener('click', () => {
    if (hasSubmitted) {
      els.hudOverlay.classList.add('hidden');
      isGoingBack = false;
      playNode(node.nextNode);
      return;
    }

    if (els.btnSubmitHud.textContent === 'Try Again') {
      // Reset form for another try
      els.hudOptions.querySelectorAll('.feedback-text').forEach(e => e.remove());
      checkboxes.forEach(item => {
        item.label.classList.remove('correct', 'incorrect');
        item.cb.checked = false;
        item.cb.disabled = false;
      });
      els.btnSubmitHud.textContent = 'Submit Response';
      els.btnSubmitHud.classList.replace('secondary', 'primary');

      const existingContinue = els.hudCard.querySelector('.btn-continue-dynamic');
      if (existingContinue) existingContinue.remove();
      return;
    }

    // Process submission
    els.hudOptions.querySelectorAll('.feedback-text').forEach(e => e.remove());

    let allCorrectSelected = true;
    let anyIncorrectSelected = false;
    let anySelected = false;

    checkboxes.forEach(item => {
      if (item.cb.checked) {
        anySelected = true;
        item.label.classList.add(item.opt.isCorrect ? 'correct' : 'incorrect');
        if (!item.opt.isCorrect) anyIncorrectSelected = true;

        // Inline feedback
        const fbText = document.createElement('div');
        fbText.className = item.opt.isCorrect ? 'feedback-text success' : 'feedback-text error';
        fbText.textContent = item.opt.feedback;
        item.label.parentNode.insertBefore(fbText, item.label.nextSibling);
      } else {
        if (item.opt.isCorrect) allCorrectSelected = false;
      }
    });

    if (!anySelected) {
      const fb = document.createElement('div');
      fb.className = 'feedback-text error';
      fb.textContent = "Please select at least one option.";
      els.hudOptions.appendChild(fb);
      return;
    }

    checkboxes.forEach(i => i.cb.disabled = true);

    if (!allCorrectSelected || anyIncorrectSelected) {
      els.btnSubmitHud.textContent = 'Try Again';
      els.btnSubmitHud.classList.replace('primary', 'secondary');
      hasSubmitted = false;
    } else {
      els.btnSubmitHud.textContent = 'Try Again';
      els.btnSubmitHud.classList.replace('primary', 'secondary');

      const existingContinue = els.hudCard.querySelector('.btn-continue-dynamic');
      if (!existingContinue) {
        const btnContinue = document.createElement('button');
        btnContinue.className = 'btn primary mt-4 btn-continue-dynamic';
        btnContinue.style.marginLeft = '10px';
        btnContinue.textContent = 'Continue';
        btnContinue.onclick = () => {
          els.hudOverlay.classList.add('hidden');
          btnContinue.remove();
          isGoingBack = false;
          playNode(node.nextNode);
        };
        els.btnSubmitHud.parentNode.insertBefore(btnContinue, els.btnSubmitHud.nextSibling);
      }
      hasSubmitted = false;
    }
  });

  els.hudOverlay.classList.remove('hidden');
}

function generateFinalAssessment() {
  const content = `
    <p><strong>Final Check:</strong> Which CBT interventions were used in this session? Select all that apply.</p>
    <label class="option-label" style="padding: 0.75rem; margin-bottom: 0.5rem;"><input type="checkbox" class="final-cb" data-correct="true"> Identify thoughts, feelings, and behaviors involved</label>
    <label class="option-label" style="padding: 0.75rem; margin-bottom: 0.5rem;"><input type="checkbox" class="final-cb" data-correct="true"> Challenging of unhelpful thinking patterns</label>
    <label class="option-label" style="padding: 0.75rem; margin-bottom: 0.5rem;"><input type="checkbox" class="final-cb" data-correct="true"> Assign homework, practice exercises</label>
    <label class="option-label" style="padding: 0.75rem; margin-bottom: 0.5rem;"><input type="checkbox" class="final-cb" data-correct="true"> Review mood and recent events</label>
    <button id="btn-final-submit" class="btn secondary mt-4">Check Answer</button>
    <p id="final-assessment-feedback" class="feedback-text hidden"></p>
  `;
  els.finalAssessment.innerHTML = content;

  document.getElementById('btn-final-submit').addEventListener('click', () => {
    const cbs = document.querySelectorAll('.final-cb');
    let passed = true;
    cbs.forEach(cb => {
      if (!cb.checked) passed = false;
    });
    const fb = document.getElementById('final-assessment-feedback');
    fb.classList.remove('hidden');
    if (passed) {
      fb.className = 'feedback-text success';
      fb.textContent = "Correct! All of these interventions were utilized in the session.";
    } else {
      fb.className = 'feedback-text error';
      fb.textContent = "Incorrect. Actually, all of these CBT interventions were demonstrated!";
    }
  });
}

function endSimulation() {
  clearInterval(timerInterval);
  els.callUI.classList.add('hidden');
  els.hudOverlay.classList.add('hidden');
  generateFinalAssessment();
  els.finalScreen.classList.remove('hidden');
}

// Pre-load voices
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
