<template>
  <div class="section">
    <!-- Header Section -->
    <section class="text-center space-y-4">
      <h1 class="heading-2">Certifications</h1>
      <p class="mx-auto max-w-2xl text-lg text-slate-400">
        Professional credentials and training that validate my expertise in cybersecurity, networking, and information security management.
      </p>
    </section>

    <!-- Certification Grid -->
    <section class="grid gap-8 md:grid-cols-2">
      <div
        v-for="cert in certifications"
        :key="cert.provider"
        class="glow-border card-glass cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
        @click="openModal(cert)"
      >
        <div class="flex items-start justify-between gap-4 mb-6">
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-cyan-400/10 text-cyan-400 text-lg font-bold">{{ cert.provider.charAt(0) }}</span>
              <div>
                <h3 class="text-xl font-semibold text-white">{{ cert.provider }}</h3>
                <p class="text-sm text-slate-400">{{ cert.certificates.length }} Certificate{{ cert.certificates.length > 1 ? 's' : '' }}</p>
              </div>
            </div>
          </div>
          <span class="inline-flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">{{ cert.certificates[0].tags[0] }}</span>
        </div>
        <p class="text-slate-300 leading-relaxed mb-4">
          {{ cert.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in cert.certificates.flatMap(c => c.tags)"
            :key="tag"
            class="inline-flex items-center rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Transition name="modal" appear>
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click="closeModal"
      >
        <div
          class="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-slate-900/95 border border-slate-800/70 rounded-3xl p-8 shadow-2xl"
          @click.stop
        >
          <!-- Close Button -->
          <button
            class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            @click="closeModal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Modal Content -->
          <div v-if="selectedProvider" class="space-y-6">
            <!-- Image Preview -->
            <div v-if="selectedImage" class="flex justify-center">
              <img :src="selectedImage" alt="Certificate" class="max-w-full max-h-[60vh] rounded-lg shadow-lg" />
            </div>
            <div v-else>
              <div class="text-center space-y-4">
                <h2 class="text-3xl font-semibold text-white">{{ selectedProvider.provider }}</h2>
                <p class="text-slate-300 leading-relaxed">{{ selectedProvider.description }}</p>
              </div>

              <!-- Certificates Grid -->
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="certificate in selectedProvider.certificates"
                  :key="certificate.name"
                  class="card-glass cursor-pointer transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
                  @click="handleCertificateClick(certificate)"
                >
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="text-lg font-semibold text-white">{{ certificate.name }}</h3>
                      <span class="text-xs uppercase tracking-[0.25em] text-cyan-400">{{ certificate.type }}</span>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tag in certificate.tags"
                        :key="tag"
                        class="inline-flex items-center rounded-full bg-slate-800/50 px-2 py-1 text-xs text-slate-300"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Certificate {
  name: string
  type: 'pdf' | 'image' | 'link'
  url: string
  tags: string[]
}

interface CertificationProvider {
  provider: string
  description: string
  certificates: Certificate[]
}

const certifications = ref<CertificationProvider[]>([
  {
    provider: 'Cisco Networking Academy',
    description: 'Completed comprehensive training in networking fundamentals, cybersecurity principles, and ethical hacking methodologies through Cisco\'s renowned certification program.',
    certificates: [
      {
        name: 'CCNA: Switching, Routing, and Wireless Essentials',
        type: 'image',
        url: '/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_danrypedrosa-gmail-com_a2eb6d16-7eeb-4cb8-8a16-bb11c8638ec4_page-0001.jpg',
        tags: ['Networking', 'Security', 'Cisco', 'CCNA']
      },
      {
        name: 'Getting Started with Cisco Packet Tracer',
        type: 'image',
        url: '/certificates/Getting_Started_with_Cisco_Packet_Tracer_certificate_danrypedrosa-gmail-com_8e6b69b2-59aa-4fcc-96d9-ad8497c5d125_page-0001.jpg',
        tags: ['Networking', 'Tools', 'Cisco']
      },
      {
        name: 'Introduction to Cybersecurity',
        type: 'image',
        url: '/certificates/Introduction_to_Cybersecurity_certificate_danrypedrosa-gmail-com_bf82ad02-039c-405c-8143-2152e72f67de_page-0001.jpg',
        tags: ['Security', 'Cybersecurity', 'Cisco']
      },
      {
        name: 'Introduction to Data Science',
        type: 'image',
        url: '/certificates/Introduction_to_Data_Science_certificate_danrypedrosa-gmail-com_b3b2bd24-5325-4999-9335-332747ba6f17_page-0001.jpg',
        tags: ['Data Science', 'Analytics', 'Cisco']
      },
      {
        name: 'Networking Basics',
        type: 'image',
        url: '/certificates/Networking_Basics_certificate_danrypedrosa-gmail-com_ebb8c804-4e56-474b-9286-987a20c04d12_page-0001.jpg',
        tags: ['Networking', 'Basics', 'Cisco']
      },
      {
        name: 'Networking Devices and Initial Configuration',
        type: 'image',
        url: '/certificates/Networking_Devices_and_Initial_Configuration_certificate_danrypedrosa-gmail-com_462df49e-31f8-4953-935e-e8a2eafa4bb6_page-0001.jpg',
        tags: ['Networking', 'Configuration', 'Cisco']
      }
    ]
  },
  {
    provider: 'SkillFront',
    description: 'Certified in international standards for information security management systems, including risk assessment, control implementation, and compliance frameworks.',
    certificates: [
      {
        name: 'ISO/IEC 27001:2022 Associate',
        type: 'image',
        url: '/certificates/SkillFront-ISO27001-2022-Associate.jpeg',
        tags: ['Risk Management', 'Compliance', 'Standards']
      }
    ]
  },
  {
    provider: 'PICSPro',
    description: 'Active member of a professional information security and cybersecurity community, engaging in knowledge sharing, networking, and continuous professional development with industry experts.',
    certificates: [
      {
        name: 'PICSPro Member Certificate',
        type: 'image',
        url: '/certificates/PICSPro-Member-Certificate.jpeg',
        tags: ['Membership', 'Professional Development', 'Knowledge Sharing']
      },
      {
        name: 'Kuentuhang Cybersecurity: Your First Steps',
        type: 'image',
        url: '/certificates/PICSPro-Kuentuhang-Cybersecurity-Basics.jpeg',
        tags: ['Cybersecurity', 'Fundamentals', 'Training']
      },
      {
        name: 'Kuentuhang Cybersecurity: AI-Ready Data Management',
        type: 'image',
        url: '/certificates/PICSPro-Kuentuhang-AI-Data-Management.jpeg',
        tags: ['Data Management', 'AI Security', 'Training']
      },
      {
        name: 'Kuentuhang Cybersecurity: Building True Cyber Resilience',
        type: 'image',
        url: '/certificates/PICSPro-Kuentuhang-Cyber-Resilience.jpeg',
        tags: ['Cyber Resilience', 'Security Strategy', 'Training']
      }
    ]
  },
  {
    provider: 'Others',
    description: 'Additional professional certifications and training from various institutions and organizations.',
    certificates: [
      {
        name: 'State Sync: React (GDG)',
        type: 'image',
        url: '/certificates/GDG-State-Sync-React.jpeg',
        tags: ['React', 'Frontend', 'Google Developers']
      },
      {
        name: 'Cybersecurity for National Security (La Salle)',
        type: 'image',
        url: '/certificates/Lasalle-Cybersecurity-National-Security.jpeg',
        tags: ['Cybersecurity', 'National Security', 'Seminar']
      }
    ]
  }
])

const isModalOpen = ref(false)
const selectedProvider = ref<CertificationProvider | null>(null)
const selectedImage = ref<string | null>(null)

const openModal = (provider: CertificationProvider) => {
  selectedProvider.value = provider
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProvider.value = null
  selectedImage.value = null
}

const handleCertificateClick = (certificate: Certificate) => {
  if (certificate.type === 'link') {
    window.open(certificate.url, '_blank')
  } else if (certificate.type === 'pdf') {
    window.open(certificate.url, '_blank')
  } else if (certificate.type === 'image') {
    selectedImage.value = certificate.url
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
