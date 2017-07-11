require 'pry'

numbers = [4,1,16,10,35,22]

def get_squares
  0.upto(10) {|numbers|
  p [numbers, Math.sqrt(numbers), Math.sqrt(numbers)**2]
}
end
