// get the product id from the url

export async function GET(
  request: Request,
  context: { params: Promise<{ productId?: string }> },
) {
  const productId = (await context.params).productId;

  if (!productId) {
    return new Response(JSON.stringify({ error: 'Product ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
    );
    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch product' }),
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
