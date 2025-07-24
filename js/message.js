const schedule = {
  "Friday": {
    "Evening": ["Eunice Mungai"]
  },
  "Saturday": {
    "Morning": ["Dr. Monica Kangethe", "Monica Zhou"],
    "Evening": ["Dr. Monica Kangethe", "Dr. Mary Hutchins"]
  },
  "Sunday": {
    "Morning": ["Eunice Mungai"]
  }
};


  function updateTimes() {
  const day = document.getElementById("day-select").value;
  const timeSelect = document.getElementById("time-select");
  const speakerSelect = document.getElementById("speaker-select");

  // Pause and reset all audio
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  timeSelect.innerHTML = '<option value="">Select Time</option>';
  speakerSelect.innerHTML = '<option value="">Select Speaker</option>';
  hideAllSpeakers();

  if (schedule[day]) {
    Object.keys(schedule[day]).forEach(timeOfDay => {
      const opt = document.createElement("option");
      opt.value = timeOfDay;
      opt.textContent = timeOfDay;
      timeSelect.appendChild(opt);
    });
  }
}


function updateSpeakers() {
  const day = document.getElementById("day-select").value;
  const timeOfDay = document.getElementById("time-select").value;
  const speakerSelect = document.getElementById("speaker-select");

  // Pause and reset all audio
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  speakerSelect.innerHTML = '<option value="">Select Speaker</option>';
  hideAllSpeakers();

  if (schedule[day] && schedule[day][timeOfDay]) {
    schedule[day][timeOfDay].forEach(speaker => {
      const opt = document.createElement("option");
      opt.value = speaker;
      opt.textContent = speaker;
      speakerSelect.appendChild(opt);
    });
  }
}

function showSpeaker() {
  const selected = document.getElementById("speaker-select").value;

  // Pause and reset all audio elements
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  hideAllSpeakers();

  if (selected) {
    const el = document.getElementById(selected);
    if (el) {
      el.classList.add("active");
      // Do NOT auto-play the audio
    }
  }
}



function hideAllSpeakers() {
  document.querySelectorAll('.speaker-info').forEach(el => el.classList.remove("active"));
}

function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("show");
}