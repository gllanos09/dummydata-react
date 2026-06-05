import { useProducts } from '../hooks/useProducts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  const { products, loading, error } = useProducts()

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Dummy Data Dashboard
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Explora productos de prueba obtenidos en tiempo real desde la API pública de DummyJSON.
        </p>
      </section>

      {/* Listado */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Productos</h2>

        {error && (
          <p className="text-destructive text-center">{error}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading
            ? Array.from({ length: 9 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-5 w-3/4" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                  </CardContent>
                </Card>
              ))
            : products.map(product => (
                <Card key={product.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base leading-snug">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-2xl font-bold">${product.price}</p>
                    <Badge variant="secondary">{product.category}</Badge>
                  </CardContent>
                </Card>
              ))
          }
        </div>
      </section>
    </main>
  )
}