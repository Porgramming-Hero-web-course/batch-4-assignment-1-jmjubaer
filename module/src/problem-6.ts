interface Profile {
    name: string;
    age: number;
    email: string;
}
interface UpdateProfile {
    (profile: Profile, updates: Partial<Profile>): Profile;
  }

const updateProfile:UpdateProfile = (profile,updates) => {
    return {...profile, ...updates}
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

