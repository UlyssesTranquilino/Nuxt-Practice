export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);
  // console.log("NAME: ", name);

  // const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_chDqv5qKcYlR6PwaufajC9zUDhrFs3WenhXMVhMF"
  );
  // handle post data
  return data;
});
