 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
         integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
     </script>
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
     <title>Document</title>

     {!! NoCaptcha::renderJs() !!}

     <style>
         .step {
             font-family: "Inter", sans-serif;
             font-size: 14px;
             font-weight: 700;
             line-height: 16.94px;<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember">
                <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ms-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>

             text-align: left;
         }

         .dash {
             font-family: "Inter", sans-serif;
             font-size: 14px;
             font-weight: 400;
             line-height: 16.94px;
             text-align: left;
         }

         .steptext {
             font-family: "Inter", sans-serif;
             font-size: 14px;
             font-weight: 500;
             line-height: 16.94px;
             text-align: left;
             color: #000000B2;
         }

         .percentage {
             font-family: "Inter", sans-serif;
             font-weight: 400;
             line-height: 16.94px;
             text-align: left;
             font-size: 14px;
             width: 40px;
             height: 21px;
             border-radius: 5px;
             color: #000000B2;
             background: lightgray;
             opacity: 1;
             display: flex;
             align-items: center;
             justify-content: center;
             margin-top: 10px;
         }

         .font-cust {
             font-family: "Inter", sans-serif;
             font-size: 14px;
             font-weight: 500;
             line-height: 19.36px;
         }

         .star {
             font-family: "Inter", sans-serif;
             font-size: 16px;
             font-weight: 500;
             line-height: 19.36px;
             color: #FF0000;
         }

         .custom-btn {
             font-family: "Inter", sans-serif;
             font-size: 14px;
             font-weight: 700;
             color: #FFFFFF;
             width: 180px;
             height: 59px;
             border-radius: 10px;
         }

         .form-control::placeholder {
             font-size: 13px;
         }

         .RECT {
             width: 76px;
             height: 76px;
         }

         .section-robot {
             border: 1px solid #0000001A;
             background: #0000000D;
             padding: 10px;
         }
     </style>
 </head>

 <body>
     @if ($errors->any())
         <div class="alert alert-danger">
             <ul>
                 @foreach ($errors->all() as $error)
                     <li>{{ $error }}</li>
                 @endforeach
             </ul>
         </div>
     @endif
     <div class="container">
         <form action="{{ route('form.submit') }}" method="POST" id="demo-form">
             @csrf
             <div class="row">
                 <div class="col-lg-3 col-md-5 mt-2">
                     <img src="asset/image/image 2-Photoroom 1.png" class="img-fluid" alt="Image 1">
                 </div>
                 <div class="col-lg-9 col-md-7 d-flex flex-column">
                     <div class="d-flex align-items-center justify-content-between w-100 pt-5 mt-3">
                         <p class="step">Step 2 <span class="dash">-</span> <span class="steptext">PO BOX
                                 Activation</span></p>
                         <p class="percentage">75%</p>
                     </div>
                     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75"
                         aria-valuemin="0" aria-valuemax="100">
                         <div class="progress-bar bg-warning" style="width: 75%"></div>
                     </div>
                     <div class="row mt-5 mb-3">
                         @if (session('error'))
                             <div class="alert alert-danger" role="alert">
                                 {{ session('error') }}
                             </div>
                         @endif

                         @if (session('success'))
                             <div class="alert alert-success" role="alert">
                                 {{ session('success') }}
                             </div>
                         @endif

                         <div class="col-md-6">
                             <label for="po-box" class="form-label font-cust">PO BOX <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control ph-cust" id="po-box"
                                 placeholder="The PO BOX number that arrived by mail" name="pobox" required>
                         </div>
                         <div class="col-md-6">
                             <label for="email" class="form-label font-cust">Email <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="email" placeholder="Email"
                                 name="email" required>
                         </div>
                     </div>
                     <div class="row mt-3 mb-3">
                         <div class="col-md-6">
                             <label for="name" class="form-label font-cust">Name <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="name" placeholder="Name" name="name"
                                 required>
                         </div>
                         <div class="col-md-6">
                             <label for="last-name" class="form-label font-cust">Last name <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="last-name" placeholder="Surname"
                                 name="last_name" required>
                         </div>
                     </div>
                     <div class="row mt-3 mb-3">
                         <div class="col-md-6">
                             <label for="mobile-phone" class="form-label font-cust">Mobile phone <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="mobile-phone"
                                 placeholder="Cell Phone Number, include +507 before the Number" name="mob_no"
                                 required>
                         </div>
                         <div class="col-md-6">
                             <label for="branch" class="form-label font-cust">Home/Office No <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="branch" placeholder="office no"
                                 name="office_no" required>
                         </div>
                     </div>
                     <div class="row mt-3 mb-3">
                         <div class="col-md-6">
                             <label for="mobile-phone" class="form-label font-cust">Id Passport <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="mobile-phone"
                                 placeholder="passport or id no" name="id_pass" required>
                         </div>
                         <div class="col-md-6">
                             <label for="branch" class="form-label font-cust">Country <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="branch" placeholder="Country name"
                                 name="country" required>
                         </div>
                     </div>
                     <div class="row mt-3 mb-3">
                         <div class="col-md-6">
                             <label for="province" class="form-label font-cust">Province <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="province" placeholder="Province"
                                 name="province" required>
                         </div>
                         <div class="col-md-6">
                             <label for="city" class="form-label font-cust">City <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="city" placeholder="City"
                                 name="city" required>
                         </div>
                     </div>
                     <div class="row mt-3 mb-3">
                         <div class="col-md-6">
                             <label for="company" class="form-label font-cust">Company <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="company" placeholder="Company Name"
                                 name="company" required>
                         </div>
                         <div class="col-md-6">
                             <label for="address" class="form-label font-cust">Delivery address <span
                                     class="star">*</span></label>
                             <input type="text" class="form-control" id="address" name="del_address"
                                 placeholder="Address" required>
                         </div>
                     </div>
                     <div class="row mt-3 mb-3">
                         <div class="col-md-6">
                             <label for="password" class="form-label font-cust">Password <span
                                     class="star">*</span></label>
                             <input type="password" class="form-control" name="password" id="password"
                                 placeholder="Password" required>
                         </div>
                         <div class="col-md-6">
                             <label for="password_confirmation" class="form-label font-cust">Confirm Password <span
                                     class="star">*</span></label>
                             <input type="password" class="form-control" id="password_confirmation"
                                 name="password_confirmation" placeholder="Confirm Password" required>
                         </div>
                     </div>
                 </div>
                 <div class="container">
        <div class="row mt-3 mb-3">
            <div class="col-lg-3 col-md-5"></div>
            <div class="col-lg-4 col-md-5">
                <div class="section-robot d-flex justify-content-between align-items-center">
                    {!! NoCaptcha::display() !!}
                </div>
            </div>
            <div class="col-lg-5 col-md-2"></div>
        </div>
    </div>

               

    <div class="container">
                     <div class="row mt-3 mb-5">
                         <div class="col-lg-3 col-md-5"></div>
                         <div class="col-lg-3 col-md-3">
                             <button type="submit" class="btn btn-warning btn-lg custom-btn">Activate PO BOX</button>
                         </div>
                         <div class="col-lg-6 col-md-4"> </div>
                     </div>
                 </div>
             <!-- </div> -->
         </form>
         {!! NoCaptcha::renderJs() !!}
     </div>
     <script src="https://www.google.com/recaptcha/api.js"></script>
     <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>
 </body>

 </html>

