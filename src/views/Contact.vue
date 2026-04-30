<template>
  <div class="section">
    <!-- Header Section -->
    <section class="text-center">
      <h1 class="heading-2">Get In Touch</h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
        Ready to discuss cybersecurity opportunities, secure development projects, or collaboration on defensive initiatives.
      </p>
    </section>

    <!-- Contact Form and Info -->
    <section class="grid gap-12 lg:grid-cols-2">
      <!-- Contact Form -->
      <div class="card-glass">
        <h2 class="text-xl font-semibold text-white mb-6">Send a Message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-2">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-slate-800 transition focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-400 mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your.email@example.com"
              class="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-slate-800 transition focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-400 mb-2">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              class="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-slate-800 transition focus:border-cyan-400 focus:ring-cyan-400/20"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary">Send Message</button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="card-glass">
          <h3 class="text-lg font-semibold text-white mb-4">Contact Details</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-slate-400">Location</p>
              <p class="mt-1 text-white">Bacolod City, Philippines</p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-slate-400">Email</p>
              <p class="mt-1 text-white">danrypedrosa@gmail.com</p>
            </div>
            <div>
              <p class="text-sm uppercase tracking-[0.25em] text-slate-400">Phone</p>
              <p class="mt-1 text-white">+63 999 377 9376</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  const recipient = 'danrypedrosa@gmail.com'
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'Visitor'}`)
  const body = encodeURIComponent(form.message || 'Hello, I would like to connect.')
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
}
</script>