import { FormControl, FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  addprojectForm: FormGroup;
  imagePreview: string;
  selectedItem;
  countryData;
  stateData;
  constructor(private fb: FormBuilder) {

    this.addprojectForm = this.fb.group({
      name: ['project', [Validators.required]],
      description: ['full project', [Validators.required]],
      image: ['', [Validators.required]],
      map_url: ['https://goo.gl/maps/2piTdp2jkE2fyCMG9', [Validators.required]],
      country_id: [null, [Validators.required]],
      state_id: [null, [Validators.required]],
      project_type_id: [1, [Validators.required]],
    });
    this.getCountry();
    }


    onSubmit(addprojectForm) {
      console.log(addprojectForm.value);

 const proData = {
   name: this.addprojectForm.get('name').value,
   description: this.addprojectForm.get('description').value,
   image: this.addprojectForm.get('image').value,
   country_id: this.addprojectForm.get('country_id').value,
   state_id: this.addprojectForm.get('state_id').value,
   project_type_id: this.addprojectForm.get('project_type_id').value,
 };
 const formdata = new FormData();
    formdata.append('name', proData.name);
    formdata.append('description', proData.description);
    formdata.append('image', proData.image);
    formdata.append('country_id', proData.country_id);
    formdata.append('state_id', proData.state_id);
    formdata.append('project_type_id', proData.project_type_id);
    // this.auth.getToken('projects?organization_id=43', formdata).subscribe(res => {
    //   console.log(res);

    // });
}


    onImagePicked(event: Event) {
      const file = (event.target as HTMLInputElement).files[0]; // convert to html input and catch the file
      this.addprojectForm.patchValue({'image': file}); // call the single property of addprojectForm [image] and assined to file
      this.addprojectForm.get('image').updateValueAndValidity(); // when change image value will be updated
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = (reader.result as string); // url
      };
      reader.readAsDataURL(file); // preview url
    }

    // get country
    getCountry() {
    //   this.auth.getData('countries').subscribe(res => {

    // this.countryData = res;
    // console.log(res);

    //   });
    }

    changeSelect(event) {
    //  console.log(event);
    this.getState(event);
    }
// get all state of spacfic country id
      getState(id) {
      //   this.auth.getData(`states?country_id=${id}`).subscribe(res => {

      // this.stateData = res;
      // console.log(this.stateData);

      //   });
    }

}
