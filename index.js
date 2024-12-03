import BloomFilter from "./bloom_filter.js"

const bloom = new BloomFilter(1000,3)


bloom.add("sidhya")
bloom.add("sidhya1")
bloom.add("sidhya2")

console.log(bloom.alreadyExist("sidhya"))
console.log(bloom.alreadyExist("sidhya3"))