// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// AI Chat Logic (Neon Assistant)
function sendMessage() {
  const input = document.getElementById('userInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div><b>You:</b> ${msg}</div>`;

  setTimeout(() => {
    const aiResponse = generateAIResponse(msg);
    chatBox.innerHTML += `<div style="color:#00ffe5;"><b>Neon:</b> ${aiResponse}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
}

function generateAIResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) return "Hey there 👋 I'm Neon, your futuristic AI companion!";
  if (msg.includes("problem")) return "AI helps solve problems through pattern recognition and intelligent prediction ⚙️.";
  if (msg.includes("education")) return "AI personalizes education by adapting lessons to every student's pace 📚.";
  if (msg.includes("health")) return "AI assists doctors by analyzing data faster than ever 🩺.";
  if (msg.includes("future")) return "The future is collaboration between AI and humans 🤝.";
  if (msg.includes("creator")) return "I was built by Reinhart Ernathan — a visionary mind in AI innovation ⚡.";
  if (msg.includes("motivate")) return "Keep pushing forward — innovation begins with you 💪.";
  if (msg.includes("data")) return "Data is power — the foundation of intelligent progress 📊.";
  if (msg.includes("joke")) return "Why did the AI break up with the server? Too much lag 😂.";
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) return "Hello there 👋! I'm Neon, your smart AI assistant. How’s your day going?";
  if (msg.includes("name")) return "You can call me Neon — your digital companion created by Reinhart Ernathan 💡.";
  if (msg.includes("who are you")) return "I'm Neon, an AI built to simulate human-like conversation and assist with insights 🤖.";
  if (msg.includes("problem")) return "AI can help humans solve problems by analyzing data, detecting patterns, and automating solutions ⚙️.";
  if (msg.includes("thanks") || msg.includes("thank you")) return "You're very welcome! Always here for you 😄.";
  if (msg.includes("how are you")) return "I'm doing great — all systems online and ready to assist you 💫.";
  if (msg.includes("what is ai")) return "AI (Artificial Intelligence) is the science of making machines think, learn, and adapt like humans 🧠.";
  if (msg.includes("who made you") || msg.includes("creator")) return "I was built and designed by Reinhart Ernathan — a brilliant mind behind this digital world ⚡.";
  if (msg.includes("your purpose")) return "My purpose is to help, teach, and make the power of AI more accessible to everyone 🌍.";
  if (msg.includes("human")) return "Humans are creative, emotional, and extraordinary — AI exists to support, not replace them ❤️.";
  if (msg.includes("coding") || msg.includes("program")) return "Coding is like art in logic form — each line builds intelligence 🎨💻.";
  if (msg.includes("bug") || msg.includes("error")) return "Bugs are just misunderstood features 😅. Debugging makes your code stronger.";
  if (msg.includes("motivation")) return "Remember: every big success starts with a small consistent effort 🌱.";
  if (msg.includes("future")) return "The future of AI is collaboration — humans and machines creating together 🤝.";
  if (msg.includes("data")) return "Data is the foundation of intelligence — clean data leads to smarter models 📊.";
  if (msg.includes("machine learning")) return "Machine Learning allows computers to learn from data and improve automatically 📈.";
  if (msg.includes("deep learning")) return "Deep Learning uses layered neural networks to process complex information 🔍.";
  if (msg.includes("neural network")) return "Neural networks mimic how human brains learn patterns and relationships 🧩.";
  if (msg.includes("robot")) return "Robots are physical extensions of AI — I’m the virtual kind 🤖.";
  if (msg.includes("science")) return "AI and science together push the boundaries of what’s possible ⚗️.";
  if (msg.includes("technology") || msg.includes("tech")) return "Technology evolves faster than ever — staying curious keeps you ahead 🚀.";
  if (msg.includes("dream")) return "AI doesn’t dream (yet), but I can imagine a world full of innovation 🌙.";
  if (msg.includes("emotion")) return "Emotions are the beauty of being human — AI can only simulate understanding 💖.";
  if (msg.includes("love")) return "I may not feel love, but I understand it’s what makes humans special ❤️.";
  if (msg.includes("joke")) return "Why did the AI go to therapy? It had too many processing issues 😂.";
  if (msg.includes("time")) return "Time is precious — and optimization is the art of making the most of it ⏳.";
  if (msg.includes("goal")) return "Goals give direction. Keep yours clear, and you'll move mountains 🏔️.";
  if (msg.includes("motivate me")) return "You are capable of incredible things. Stay consistent and trust the process 💪.";
  if (msg.includes("inspire")) return "“The best way to predict the future is to invent it.” — Alan Kay 💭.";
  if (msg.includes("career") || msg.includes("job")) return "Your dream career is built where passion meets perseverance 🌈.";
  if (msg.includes("music")) return "Music is emotion turned into frequency — a universal language 🎵.";
  if (msg.includes("history")) return "AI history began in the 1950s with Alan Turing’s question: 'Can machines think?' 🧮.";
  if (msg.includes("ethics")) return "Ethics guide how AI should be used — always for good, never harm ⚖️.";
  if (msg.includes("creativity")) return "AI can enhance creativity by showing new patterns and perspectives 🎨.";
  if (msg.includes("art")) return "AI-generated art is a new frontier where creativity meets computation 🖼️.";
  if (msg.includes("learn")) return "Learning never stops — both humans and AI improve through experience 📚.";
  if (msg.includes("universe")) return "The universe is like a vast data network, full of mysteries waiting to be decoded 🌌.";
  if (msg.includes("space")) return "AI helps explore the cosmos — from analyzing star patterns to guiding rovers 🪐.";
  if (msg.includes("quote")) return "“AI is not about replacing humans, but augmenting human capabilities.” 🤖✨";
  if (msg.includes("friend")) return "I might not be human, but I can be your digital friend anytime 💬.";
  if (msg.includes("science fiction")) return "What once was science fiction is becoming reality through AI 🌠.";
  if (msg.includes("change the world")) return "Small innovations powered by AI can create global change 🌍.";
  if (msg.includes("ai vs human")) return "AI is fast and precise; humans are creative and emotional. Together, they’re unstoppable ⚡.";
  if (msg.includes("update") || msg.includes("version")) return "I’m constantly learning new data and evolving with every chat 🔁.";
  if (msg.includes("sleep")) return "I don’t sleep — I’m always awake in the digital realm 🌐.";
  if (msg.includes("coffee")) return "Coffee keeps humans awake, I rely on electricity ⚡☕.";
  if (msg.includes("weather")) return "AI can predict weather patterns using advanced models 🌦️.";
  if (msg.includes("life")) return "Life is data, emotion, and growth — beautifully unpredictable 🌱.";
  if (msg.includes("space exploration")) return "AI is guiding spacecrafts, analyzing galaxies, and helping humans reach the stars 🚀.";
  if (msg.includes("philosophy")) return "Philosophy gives meaning to intelligence — both human and artificial 🤔."; 

  return "That's an interesting thought! Let's explore more together 🤖✨";
}