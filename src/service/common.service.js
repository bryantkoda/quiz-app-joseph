export async function makeApiCall(url ,requestOptions) {
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return { response, data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
