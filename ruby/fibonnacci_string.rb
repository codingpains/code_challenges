def fib_str(n)
  fib_seq(n).each_with_index.map { |t, i| LETTERS[i] * t }.join
end

LETTERS = ('a'..'z').to_a

def fib_seq(n)
  return [1] if n == 1
  return [1, 1] if n == 2
  prev = fib_seq(n - 1)
  prev + [prev[-1] + prev[-2]]
end

puts fib_str(5)
puts fib_str(6)
