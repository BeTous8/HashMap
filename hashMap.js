export default class HashMap {
    constructor(capacity = 16, loadFactor = .75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;

        //create an array with empty slots equal to capacity
        this.buckets = new Array(this.capacity);

        // create empty array for each indices
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }

    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;

        }

        return hashCode;

    }

    set(key, value) {
        // console.log(`the value is now ${value}`)
        const hashCode = this.hash(key);
        // console.log(`the hashcode": ${hashCode}`)
        const selectedBucket = this.buckets[hashCode];

        // if the key already exist in the bucket list:
        for (let i = 0; i < selectedBucket.length; i++) {
            if (selectedBucket[i][0] === key) {
                console.log(`the value is updated for ${key}: ${selectedBucket[i][1]}--> ${value}`);
                selectedBucket[i][1] = value;
                return;
            }
        }

        //if the key is new:
        selectedBucket.push([key,value]);
        this.size++;
        console.log(`Added new entry: ${key} = ${value}`);

        

        // if (key in selectedBucket) {
        //     console.log(`the old value for ${key}: ${selectedBucket[key]}`)
        // }
        // selectedBucket[key] = value;
        // console.log(`the new value for ${key}: ${selectedBucket[key]}`)

    }
}
