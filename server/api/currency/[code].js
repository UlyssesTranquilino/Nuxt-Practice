export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const { data } = await $fetch(uri);
  return data;
});

//https://api.currencyapi.com/v3/latest?apikey=cur_live_chDqv5qKcYlR6PwaufajC9zUDhrFs3WenhXMVhMF&currencies=EUR%2CUSD%2CCAD&base_currency=GBP
//https://api.currencyapi.com/v3/latest?currencies=GBP&apiKey=chDqv5qKcYlR6PwaufajC9zUDhrFs3WenhXMVhMF

//https://api.currencyapi.com/v3/latest?apikey=cur_live_chDqv5qKcYlR6PwaufajC9zUDhrFs3WenhXMVhMF&currencies=EUR
