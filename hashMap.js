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

    getBucket(key) {
        const hashCode = this.hash(key);
        return this.buckets[hashCode];
    }

    set(key, value) {
        const selectedBucket = this.getBucket(key);

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

        //check if the size is not beyond the limit
        if (this.size > this.capacity * this.loadFactor) {
            this.capacity *= 2;
        }

    }

    get(key) {
        const selectedBucket = this.getBucket(key);

        //loop through the selectedBucket to see if the key exist
        for (let i = 0; i < selectedBucket.length; i++) {
            if (selectedBucket[i][0] === key) {
                console.log(`Found ${key}: ${selectedBucket[i][1]}`);
                return selectedBucket[i][1]
            } 
        }

        console.log(`Key ${key} not found`);
        return null;
    }

    has(key) {
        const selectedBucket = this.getBucket(key);

        //loop through the selectedBucket to see if the key exist
        for (let i = 0; i < selectedBucket.length; i++) {
            if (selectedBucket[i][0] === key) {
                return true;
            } 
        }

        return false;
    }

    remove(key) {
        const selectedBucket = this.getBucket(key);
        
        for (let i = 0; i < selectedBucket.length; i++) {
            if (selectedBucket[i][0] === key) {
                selectedBucket.splice(i,1);
                this.size--;
                return true;
            } 
        }
        
        console.log('no key found to remove')
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }

        this.size = 0;
    }
}
