# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dest1 = Destination.create(name: "Island Fishing Lakes", city: "Hamilton", state: "ohio", description: "A small lake located in a mobile home park")
bait = Feature.create(name: "bait shop", destination_id: dest1.id)
comment1 = Comment.create(content: "This place is great", destination_id: dest1.id)
featuretwo = Feature.create(name: "playground", destination_id: dest1.id)
