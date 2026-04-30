<template>
  <header class="sticky top-0 z-40 border-b border-slate-800/30 bg-slate-950/60 backdrop-blur-2xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
      <RouterLink to="/" class="group flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.32em] text-white transition-all duration-300 hover:text-cyan-300">
        <button
          type="button"
          class="relative h-12 w-12 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none"
          @click.prevent="openImageModal"
          aria-label="View profile image"
        >
          <!-- Glow ring effect -->
          <div class="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/30 to-emerald-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Profile image with ring -->
          <img
            src="/graduate.jpg"
            alt="Profile"
            class="relative h-full w-full rounded-full object-cover ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-400/10 transition-all duration-300 group-hover:ring-cyan-400/70 group-hover:shadow-cyan-400/30"
          />
        </button>
        <span class="text-lg transition-all duration-300 group-hover:text-cyan-300">Danry Y. Pedrosa</span>
      </RouterLink>

      <nav class="hidden items-center gap-2 text-sm font-medium md:flex">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ active: $route.path === '/' }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/experience"
          class="nav-link"
          :class="{ active: $route.path === '/experience' }"
        >
          Experience
        </RouterLink>
        <RouterLink
          to="/certifications"
          class="nav-link"
          :class="{ active: $route.path === '/certifications' }"
        >
          Certifications
        </RouterLink>
        <RouterLink
          to="/contact"
          class="nav-link"
          :class="{ active: $route.path === '/contact' }"
        >
          Contact
        </RouterLink>
      </nav>

      <button
        type="button"
        class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-white hover:shadow-lg hover:shadow-cyan-400/10 md:hidden"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation"
      >
        <span v-if="!menuOpen" class="text-lg transition-all duration-300">☰</span>
        <span v-else class="text-lg transition-all duration-300">✕</span>
      </button>
    </div>

    <transition name="fade">
      <div v-if="menuOpen" class="border-t border-slate-800/30 bg-slate-950/80 backdrop-blur-2xl px-6 py-8 md:hidden">
        <div class="space-y-4 text-sm font-medium">
          <RouterLink
            to="/"
            class="block rounded-2xl px-4 py-3 text-slate-400 transition-all duration-300 hover:bg-slate-900/50 hover:text-white"
            :class="{ 'bg-slate-900/50 text-white': $route.path === '/' }"
            @click="menuOpen = false"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/experience"
            class="block rounded-2xl px-4 py-3 text-slate-400 transition-all duration-300 hover:bg-slate-900/50 hover:text-white"
            :class="{ 'bg-slate-900/50 text-white': $route.path === '/experience' }"
            @click="menuOpen = false"
          >
            Experience
          </RouterLink>
          <RouterLink
            to="/certifications"
            class="block rounded-2xl px-4 py-3 text-slate-400 transition-all duration-300 hover:bg-slate-900/50 hover:text-white"
            :class="{ 'bg-slate-900/50 text-white': $route.path === '/certifications' }"
            @click="menuOpen = false"
          >
            Certifications
          </RouterLink>
          <RouterLink
            to="/contact"
            class="block rounded-2xl px-4 py-3 text-slate-400 transition-all duration-300 hover:bg-slate-900/50 hover:text-white"
            :class="{ 'bg-slate-900/50 text-white': $route.path === '/contact' }"
            @click="menuOpen = false"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </transition>

    <!-- Image Modal -->
    <Transition name="modal" appear>
      <div
        v-if="isImageModalOpen"
        class="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-auto bg-black/80 p-4 backdrop-blur-sm"
        @click="closeImageModal"
      >
        <div class="relative w-full max-w-4xl" @click.stop>
          <!-- Close Button -->
          <button
            class="absolute top-4 right-4 z-20 rounded-full bg-black/60 p-2 text-white transition duration-200 hover:bg-black/80 hover:text-cyan-300"
            @click="closeImageModal"
            aria-label="Close image viewer"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Image -->
          <img
            src="/graduate.jpg"
            alt="Profile"
            class="block w-full max-h-[86vh] rounded-3xl shadow-2xl shadow-cyan-500/25 object-contain"
          />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)
const isImageModalOpen = ref(false)

const openImageModal = () => {
  isImageModalOpen.value = true
}

const closeImageModal = () => {
  isImageModalOpen.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isImageModalOpen.value) {
    closeImageModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
