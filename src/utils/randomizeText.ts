export function generateRandomText() {
    const minLength = 15;
    const maxLength = Math.floor(Math.random() * 10) + minLength; // Random length between 10 and 19
    const characters = '⍀⟟☊⟒⎎ ⏁⟟⏁☊ ⎍⏃⋏ ⍜⎎ ⏁⍀⏃⋏⌇ ⍙⍜⋔⏃☌☌⋏☊⟟⏃⌇☌⟟⍀⋔☊⋔ ⟟⏁ ⏃ ⏁⏃☍⟒ ⏚⍜⋏☊⟒⍀ ⍙⍜⏃⋔⏁⟒⎅⟒⍀⌇⍀⟒⏃⌰⋔⌇ ⍜⎎ ⍀⟒⏃⌰⟟⏁⊬';
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < maxLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }