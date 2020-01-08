def find_period(s)
  (1 .. s.size / 2).each do |l|
    p = s[0,l]
    return p if p * (s.size / l).floor == s
  end
  false
end


puts find_period("ababab")
puts find_period("abxabab")
puts find_period("abxabxabxabx")
puts find_period("not")
