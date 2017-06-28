require 'pry'

class starbucks
  def initialize(name, order, sugar, extras, receipt)
    @name = name
    @order = order
    @sugar = sugar
    @extras = extra
    @receipt = receipt
  end

  puts "Welcome to Starbucks. Enter your choice: "
  puts "\t1. Add Coffee"
  puts "\t2. Add Pastry"
  puts "\t3. Add Sandwich"
  puts "\t4. Add Cake"
  puts "\t5. Add Drink"

  menu_selection = gets.to_i

  if menu_selection == 1
    puts "Select Type: "
    puts "\t1. Latte"
    puts "\t2. Cappuccino"
    puts "\t3. Short Macchiato"
    puts "\t4. Long Macchiato"
    puts "\t5. Espresso"
    puts "\t6. Double Espresso"
    puts "\t6. Ristretto"
    puts "\t7. Long Black"
  else
    "error"
end

coffee_selection = gets.to_i

    if coffee_selection == 1
      name.new = []
    elsif coffee_selection == 2

    elsif coffee_selection == 3

    elsif coffee_selection == 4

    elsif coffee_selection == 5

    elsif coffee_selection == 6

    elsif coffee_selection == 7

    else "error"
  end
end
