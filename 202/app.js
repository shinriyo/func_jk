var fibF = function(n)
{
  return n <= 1 ? 1 : fibF(n - 2) + fibF(n - 1);
};
