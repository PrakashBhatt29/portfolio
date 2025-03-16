import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-fuchsia-900 text-white relative overflow-hidden">
      {/* Radiant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      {/* Hero Section */}
      <main className="container relative mx-auto px-6 py-12 lg:px-8 z-10">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
          <div className="h-32 w-32 rounded-full bg-purple-800/50 animate-pulse lg:h-40 lg:w-40"></div>
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <div className="h-10 w-3/4 bg-purple-800/50 rounded animate-pulse"></div>
              <div className="h-1 w-20 bg-purple-800/50 rounded animate-pulse"></div>
            </div>
            <div className="h-20 w-full bg-purple-800/30 rounded animate-pulse"></div>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full bg-purple-800/50 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-48 bg-purple-800/50 rounded animate-pulse"></div>
            <div className="h-px flex-1 bg-purple-800/30 animate-pulse"></div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden border-0 bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 backdrop-blur-md text-white"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-purple-800/50 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-5 w-32 bg-purple-800/50 rounded animate-pulse"></div>
                      <div className="h-4 w-24 bg-purple-800/30 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-purple-800/30 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-purple-800/30 rounded animate-pulse"></div>
                    <div className="h-4 w-4/6 bg-purple-800/30 rounded animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className="mt-24 mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-48 bg-purple-800/50 rounded animate-pulse"></div>
            <div className="h-px flex-1 bg-purple-800/30 animate-pulse"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card
                key={i}
                className="overflow-hidden border-0 bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 backdrop-blur-md text-white"
              >
                <CardContent className="p-0">
                  <div className="relative h-60 w-full overflow-hidden bg-purple-800/30 animate-pulse">
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="h-6 w-48 bg-purple-800/50 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 w-full bg-purple-800/30 rounded animate-pulse mb-1"></div>
                      <div className="h-4 w-5/6 bg-purple-800/30 rounded animate-pulse"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

