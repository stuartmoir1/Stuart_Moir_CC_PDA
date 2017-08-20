### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

# Methods.

# val1 should be (val1)
def func1 val 
  # = should be ==
  if val = 1
  # Indentation would improve readibilty  
  return true
  else
  return false
  end
end
  
# dif should be def; max a b should be max(a, b)
dif max a b
  if a > b
      # For consitency, indent by 2 spaces not 4
      return a 
  else
  # Should be return b
  b
  end 
end
# Superflous end statement
end

def looper 
  for i in 1..10
  # Indentation would improve readability
  # Should return not puts?
  # Should only return when loop counter gets to 10?
  puts i
  end
end

# Main.
 
failures = 0 

if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# end statement missing
 
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  # "func1(3)" should be "max(100, 1)"
  puts "func1(3) failed"
  failrues = failures + 1
end

# failures should be failures != 0  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end