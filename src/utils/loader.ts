export async function loader(value: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(false); 
    }, value);
  });
}