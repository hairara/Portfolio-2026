import { ref, onMounted } from 'vue'

const GITHUB_USERNAME = 'hairara'
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`

export function useGitHub() {
  const repos = ref([])
  const profile = ref(null)
  const loading = ref(true)
  const error = ref(null)

  async function fetchProfile() {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
    if (res.ok) profile.value = await res.json()
  }

  async function fetchRepos() {
    const res = await fetch(GITHUB_API)
    if (!res.ok) throw new Error('Failed to fetch repos')
    const data = await res.json()
    repos.value = data.filter(r => !r.fork).slice(0, 6).map(r => ({
      id: r.id,
      title: r.name.replace(/-/g, ' ').replace(/_/g, ' '),
      rawName: r.name,
      description: r.description || '',
      language: r.language,
      stars: r.stargazers_count,
      url: r.html_url,
      topics: r.topics || [],
      updatedAt: new Date(r.updated_at).getFullYear(),
    }))
  }

  onMounted(async () => {
    try {
      await Promise.all([fetchProfile(), fetchRepos()])
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  })

  return { repos, profile, loading, error, username: GITHUB_USERNAME }
}
