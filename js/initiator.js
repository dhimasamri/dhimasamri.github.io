      	// untuk index.html
        const sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav);

        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
          indicators: false,
          height: 300,
          transision: 500,
          interval: 5000
        });

        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);

        const collapsibble = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibble, {})

        const scroll = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scroll, {
          scrollOffset: 100
        });


        // Untuk job-list.html
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);

        // untuk galery
        const materialbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialbox);

        // untuk signup html

        const selector = document.querySelectorAll('select');
        M.FormSelect.init(selector);

        function checkUsername() {
          var username = document.querySelector('#username');
          var username2 = username.value;
          var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
          var msg = document.querySelector('.username-msg');
          if(format.test(username2)){
            msg.innerHTML = '<span style="color: red;">Cannot use special characters!</span>';
            username.classList.remove("valid");
            username.classList.add("invalid");
          } else {
            msg.innerHTML = '';
            username.classList.remove("invalid");
            username.classList.add("valid");
          }

        }

        function checkNIK() {
          var nik = document.querySelector('#NIK');
          var nik2 = nik.value;
          var msg = document.querySelector('.NIK-msg')
          if (isNaN(nik2)) {
            msg.innerHTML = '<span style="color: red;">Must contain number only!</span>'
            nik.classList.remove("valid");
            nik.classList.add("invalid");            
          } else if (nik2.length != 16) {
            msg.innerHTML = '<span style="color: red;">Panjang NIK adalah 16 angka</span>'
            nik.classList.remove("valid");
            nik.classList.add("invalid");            
          } else {
            msg.innerHTML = '';
            nik.classList.remove("invalid");
            nik.classList.add("valid");           
          }

        }

        function checkPassword() {
          var stregth = {
            0: "Weakest",
            1: "Weak",
            2: "OK",
            3: "Good",
            4: "Strong"
          }
          var msg = document.querySelector('.password-msg');
          var password = document.querySelector('#password');
          var password2 = password.value;
          var result = zxcvbn(password2);
          var score = stregth[result.score];
          if (score == "Weakest") {
              msg.innerHTML = '<span style="color: purple;">Weakest</span>';
              password.classList.remove("valid");
              password.classList.add("invalid");
          } else if (score == "Weak") {
              msg.innerHTML = '<span style="color: red;">Weak</span>';
              password.classList.remove("valid");
              password.classList.add("invalid");
          } else if (score == "OK") {
              msg.innerHTML = '<span style="color: pink;">OK</span>';
              password.classList.remove("invalid");
              password.classList.add("valid");
          } else if (score == "Good") {
              msg.innerHTML = '<span style="color: orange;">Good</span>';
              password.classList.remove("invalid");
              password.classList.add("valid");
          } else if (score == "Strong") {
              msg.innerHTML = '<span style="color: green;">Strong</span>';
              password.classList.remove("invalid");
              password.classList.add("valid");
          } 
        }

        function checkMatchPwd(){
          var pwd = document.querySelector('#password');
          var pwd2 = document.querySelector('#password2');
          var msg = document.querySelector('.password2-msg');
          if (pwd.value != pwd2.value){
              msg.innerHTML = '<span style="color: red;">Password not match!</span>';
              pwd2.classList.remove("valid");
              pwd2.classList.add("invalid");
          } else {
              msg.innerHTML = '';
              pwd2.classList.remove("invalid");
              pwd2.classList.add("valid");
          }
        }


        function registerButton(event) {
          var input = document.querySelectorAll("input");
          var error = false;
          input.forEach(function(item, index, list) {
            if (item.classList.contains("invalid") || item.value == ""){
              if (item.id != "phone2"){
                  error = true;
              }
            }
          });

          if(error){
             event.preventDefault();
             window.alert("Mohon isi semua data dengan benar!");
          } else {
              var usernameData = document.getElementById("username").value;
              var emailData = document.getElementById("email").value;
              var NIKData = document.getElementById("NIK").value;
              // Membery Type
              // Join Periode
              var professionData = document.getElementById("profession").value;
              var skillsetData = document.getElementById("skillset").value;
              var passwordData = document.getElementById("password").value;
              var fullnameData = document.getElementById("fullname").value;
              var birthdateData = document.getElementById("birthdate").value;
              var telephoneData = document.querySelector("#phone").value;
              var handphoneData = document.querySelector("#phone2").value;
              var addressData = document.getElementById("address").value;

              sessionStorage.setItem("Username", usernameData);
              sessionStorage.setItem("Email", emailData);
              sessionStorage.setItem("NIK", NIKData);
              sessionStorage.setItem("Profession", ProfessionData);
              sessionStorage.setItem("Skillset", skillsetData);
              sessionStorage.setItem("Password", passwordData);
              sessionStorage.setItem("Fullname", fullnameData);
              sessionStorage.setItem("Birthdate", birthdateData);
              sessionStorage.setItem("Telephone", telephoneData);
              sessionStorage.setItem("Handphone", handphoneData);
              sessionStorage.setItem("Address", addressData);
          }
        }

        // Google SSO
        function onSignIn(googleUser) {
          var profile = googleUser.getBasicProfile();
          var ID = profile.getId();
          var Name = profile.getName();
          var Image = profile.getImageUrl();
          var Email = profile.getEmail();
          console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
          sessionStorage.setItem("GID", ID);
          sessionStorage.setItem("GName", Name);
          sessionStorage.setItem("GImage", Image);
          sessionStorage.setItem("GEmail", Email);
          window.location.href="sign-up.html";


        }