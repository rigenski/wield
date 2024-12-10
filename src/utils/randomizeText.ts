export function generateRandomText() {
    const minLength = 15;
    const maxLength = Math.floor(Math.random() * 10) + minLength;
    const characters = '⍀⟟☊⟒⎎ ⏁⟟⏁☊ ⎍⏃⋏ ⍜⎎ ⏁⍀⏃⋏⌇ ⍙⍜⋔⏃☌☌⋏☊⟟⏃⌇☌⟟⍀⋔☊⋔ ⟟⏁ ⏃ ⏁⏃☍⟒ ⏚⍜⋏☊⟒⍀ ⍙⍜⏃⋔⏁⟒⎅⟒⍀⌇⍀⟒⏃⌰⋔⌇ ⍜⎎ ⍀⟒⏃⌰⟟⏁⊬';
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < maxLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }