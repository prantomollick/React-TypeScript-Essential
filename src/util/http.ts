export async function get<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = (await res.json()) as T;
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    throw new Error(
      `Something Wen Wrong to sending http Request! 🥶${errorMessage}`
    );
  }
}
