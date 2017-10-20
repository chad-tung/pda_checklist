### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
 <!-- // - Error here, should be func1(val), as the function should take in val as an argument. - EDIT - Told this works because of ruby. -->
def func1 val
<!-- // - Error here, as there should be a (==) -->
  if val = 1
  return true
  else
  return false
  end
end

<!-- // - Errors here, should be max(a, b), as the function max should take in 2 arguments, a and b. 'def' is incorrectly spelled as 'dif'. -->
dif max a b
  if a > b
      return a
  else
  b
  end
end
<!-- //- Error - One too many ends -->
end

<!--This should return 1 to 10  -->
def looper
  for i in 1..10
  puts i
  end
<!--Based on the test, they probably want a return i in here  -->
end

failures = 0

<!-- // - Error - looper should return 1 to 10, unless you have the return after the end.  -->
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
<!-- // - Error - needs an end -->


<!-- // - Error - carried error from the earlier miswritten function. -->
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
<!-- // - probably means to puts "max(100,1) failed", although won't throw an error. -->
  puts "func1(3) failed"
<!-- // - Error, 'failrues' instead of 'failures' -->
  failrues = failures + 1
end

<!-- // - Error, This test should always return "Test Failed", as failures does exist. This should be 'if failures > 0' -->
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

```
