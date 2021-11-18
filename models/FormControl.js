// import * as Yup from "yup";
// type Options = {
//   trim?: Boolean,
//   required?: Boolean,
// };

// const typeMethod = {
//   text: "string",
//   number: "number",
// };

// export class FormControl {
//   constructor(
//     name: String,
//     options?: Options = {},
//     type?: "text" | "number",
//     className?: String,
//     element?: "input" | "textArea"
//   ) {
//     this.name = name;
//     this.type = type || "text";
//     this.element = element || "input";
//     this.options = {
//       trim: options.trim || true,
//       required: options.required || false,
//       ...options,
//     };
//     this.className = className || "";
//   }

//   schema = () => {
//     let scm = Yup[typeMethod[this.type]]();
//     for (const key in this.options)
//       if (this.options[key] && scm[key])
//         scm = scm[key](
//           key === "required"
//             ? "form.required"
//             : key === "max" || key === "min"
//             ? `form.${key}` + this.options[key]
//             : undefined
//         );

//     return scm;
//   };
// }
