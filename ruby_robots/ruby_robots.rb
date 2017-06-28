require 'pry'

class = Robot
  def initialize
    @@instance_count = 0
    @name = "#{prefix}#{suffix}"
  end

  def prefix
    ('aa'..'zz').to_a.sample
  end

  def suffix
    (000..999).to_a.sample
  end

  def name
    @name
  end

  def reset
    @name = "#{prefix}#{suffix}"
  end


puts 'name'
robot1 = robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts 'name'
robot2 = robot.new
puts robot2.name
puts robot2.name
puts robot2.name

binding.pry


('aa'..'zz').to_a.sample
(000..999).to_a.sample
