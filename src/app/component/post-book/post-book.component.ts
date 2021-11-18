import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/Service/http.service';
import { Category } from 'src/app/type/type';


@Component({
  selector: 'app-post-book',
  templateUrl: './post-book.component.html',
  styleUrls: ['./post-book.component.scss'],
  providers:[MessageService]
})
export class PostBookComponent implements OnInit {


  name = 'Angular ' ;
  public editor = ClassicEditor;
  title = "cloudsSorage";
  selectedFile!: File;
  fb:any = 'https://lh4.ggpht.com/-PtwFBckvv78/V3aBB39xD9I/AAAAAAAAHFA/EXKKalIB8IkvyJjUzGrDVQCzLMs5Alx9QCLcB/s1600/anh-blogspot-khong-hien-thi.png';
  downloadURL!: Observable<string>;
  postBookForm!: FormGroup;
  isLoadImg:boolean=false;
  isDisplaySubmit:boolean=false;
  valueSelectedOption: string = 'Huyền Huyễn';
  category!:any;

  constructor(
    private storage: AngularFireStorage,
    private formBuilder:FormBuilder,
    private http: HttpService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.postBookForm = this.formBuilder.group({
      nameBook: [null, Validators.required,this.http.uniqueNameBookValidator()],
      nameAuthor:[null,Validators.required],
      img:[null,Validators.required],
      description:[null, Validators.compose([Validators.required,Validators.minLength(35)])],
      category:[this.valueSelectedOption,Validators.required],
      addCategory:[null,,this.http.uniqueNameCategoryValidator()]
    });

    this.http.getAPI("category").subscribe(data => {
      this.category = data
    })
  }

  onSubmit(){
    const informationBook:any = {
      view:0,
      linkImg: this.fb,
      writing:'read',
      nominate:0
    }
    const {nameBook,nameAuthor,img,description,category,addCategory} = this.postBookForm.value
    if(this.isDisplaySubmit){
      if(this.valueSelectedOption === '0'){
        const data = {
          nameBook:nameBook,
          nameAuthor:nameAuthor,
          description:description,
          category:addCategory,
          ...informationBook,
        }
        this.http.postAPI("book",data).subscribe(res => {
          console.log("thành công")
          this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Bạn đăng truyện thành công'});
        })
        const dataCategory = {
          name:addCategory
        }
        this.http.postCategoryAPI(dataCategory).subscribe(res => {
          console.log("thành công")
        })
      }
      else {
        const data = {
          nameBook:nameBook,
          nameAuthor:nameAuthor,
          description:description,
          category:category,
          ...informationBook,
        }
        this.http.postAPI("book",data).subscribe(res => {
          console.log("thành công")
          this.messageService.add({severity:'success', summary: 'Thành công', detail: 'Bạn đăng truyện thành công'});
        })
      }
    }else {
      alert('Vui lòng thêm ảnh vào!!!')
    }
    console.log(this.postBookForm)
    this.postBookForm.reset()
    
  }

  onFileSelected(event:any) {
    var n = Date.now();
    const file = event.target.files[0];
    const data:string = file.name.split(".")
    console.log(data)
    if(data[1].toLowerCase() === "jpg" || data[1].toLowerCase()==="jpeg" || data[1].toLowerCase()==="png"){
      const filePath = `RoomsImages/${n}`;
      const fileRef = this.storage.ref(filePath);
      console.log(123)
      const task = this.storage.upload(`RoomsImages/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          tap(()=>{this.isLoadImg = true}),
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.isDisplaySubmit = true;
                this.fb = url;
                this.isLoadImg = false;
              }
              console.log(this.fb);
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          }
        })
    }else {
      alert("Vui lòng chọn file ảnh!!!!")
    }
  }
}
