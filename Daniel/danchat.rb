require 'pry'
def daniel_chat
  input = gets.chomp
  # binding.pry
  if input == ""
    puts "Fine. Be that way!"
  elsif input == input.upcase
    puts "Woah, Chill out dude!"
  elsif input[-1] == "?"
    puts "Sure"
  end
end

daniel_chat

  #All Caps = 'Woah, Chill out dude!'
  #A question = 'Sure'
  # '' = 'Fine. Be that way!'
