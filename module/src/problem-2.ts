type RemoveDuplicates = (param: number[]) => number[];

const removeDuplicates: RemoveDuplicates = (param) => {
    return param.filter((value, index) => param.indexOf(value) === index);
};

const arrayWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]