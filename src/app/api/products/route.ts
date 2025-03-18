export async function GET() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch products' }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
