import { Validator, NG_VALIDATORS, FormControl } from "@angular/forms";
import { Directive, OnInit, forwardRef } from "@angular/core";

@Directive({
  selector: "[DqPhoneNanp]",
  providers: [
    { provide: NG_VALIDATORS, 
      useExisting: DqPhoneNanpDirective, 
      multi: true }
  ]
})
export class DqPhoneNanpDirective implements Validator, OnInit {
  ngOnInit() {}
 
  validate(c: FormControl) {
    let v: number = +c.value;

    if (isNaN(v)) {
      //  alert("Not a #"  )    ;
      return { gte: true, requiredValue: 10 };      
    }

    if (v <= +10) {
      //  alert("LTE to "  )    ;      
      return { gte: true, requiredValue: 10 };
    }

    return null;
  }
}