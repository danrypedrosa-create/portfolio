<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section - Full Screen -->
    <section class="flex flex-1 items-center justify-center hero-bg">
      <div class="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
        <div class="space-y-8 animate-fade-in">
          <div class="space-y-6">
            <p class="text-sm uppercase tracking-[0.35em] text-cyan-300 font-medium">Entry-Level Cybersecurity Analyst | BSIT Graduate</p>
            <h1 class="heading-1 bg-linear-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent">
              Danry Y. Pedrosa
            </h1>
            <p class="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl">
              Recent BSIT graduate specializing in network security fundamentals, ethical hacking, and web application testing with hands-on experience in cybersecurity competitions and development projects.
            </p>
          </div>

          <div class="flex flex-col gap-6 sm:flex-row sm:justify-center">
            <RouterLink to="/experience" class="btn-primary">View Experience</RouterLink>
            <RouterLink to="/contact" class="btn-secondary">Get In Touch</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section">
      <div class="text-center space-y-4">
        <h2 class="heading-2">Core Competencies</h2>
        <p class="text-slate-400 text-lg">Technologies and skills I've mastered</p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="card-glass">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
              <span class="text-xl">🔒</span>
            </div>
            <h3 class="text-xl font-semibold text-white">Cybersecurity</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Network security fundamentals, Web application testing, Ethical hacking
          </p>
        </div>

        <div class="card-glass">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
              <span class="text-xl">🌐</span>
            </div>
            <h3 class="text-xl font-semibold text-white">Networking</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Cisco Packet Tracer projects, Network infrastructure design
          </p>
        </div>

        <div class="card-glass">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
              <span class="text-xl">💻</span>
            </div>
            <h3 class="text-xl font-semibold text-white">Programming</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Python, C++, Java, HTML, CSS, JavaScript, PHP
          </p>
        </div>

        <div class="card-glass">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
              <span class="text-xl">🛠️</span>
            </div>
            <h3 class="text-xl font-semibold text-white">Tools & Platforms</h3>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Linux (Kali, Ubuntu), Nmap, Wireshark
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>