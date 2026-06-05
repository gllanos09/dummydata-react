import { useProducts } from '../hooks/useProducts'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

export default function Entities() {
  const { products, loading, error } = useProducts()

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Entities</h1>
      <p className="text-muted-foreground mb-8">
        Listado completo de entidades con sus propiedades principales.
      </p>

      {error && <p className="text-destructive">{error}</p>}

      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Título</th>
              <th className="text-left px-4 py-3 font-medium">Categoría</th>
              <th className="text-left px-4 py-3 font-medium">Precio</th>
              <th className="text-left px-4 py-3 font-medium">Rating</th>
              <th className="text-left px-4 py-3 font-medium">Stock</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="border-t">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <td key={j} className="px-4 py-3">
                        <Skeleton className="h-4 w-20" />
                      </td>
                    ))}
                  </tr>
                ))
              : products.map(product => (
                  <tr key={product.id} className="border-t hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3 font-medium max-w-[200px] truncate">{product.title}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">{product.category}</Badge>
                    </td>
                    <td className="px-4 py-3 font-semibold">${product.price}</td>
                    <td className="px-4 py-3">{product.rating} ⭐</td>
                    <td className="px-4 py-3">{product.stock} uds.</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}