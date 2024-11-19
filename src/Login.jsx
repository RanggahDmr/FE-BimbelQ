const Login = () => {
    return (
 <section>
  
  <div class="left">
    <div class="container mx-auto">
      <p className="text-6xl text-white">Bimbel</p><p className="text-6xl text-brandQ">Q</p>
    </div>
  </div>
  <div class="flex  justify-center py-10 items-center bg-lightgray">
		<form class="bg-white col-lg-6 col-xl-4 px-10 py-4 rounded-md" >
			<p class="text-2xl font-bold text-gray-600 mb-7">Masuk</p>
			
				
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 bg-lightgray border-textfield ">
						<input class="pl-2 outline-none border-none bg-lightgray" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl bg-lightgray border-textfield">
							
							<input class="pl-2 outline-none border-none bg-lightgray " type="text" name="" id="" placeholder="Password" />
      </div>
     
							<button type="submit" class="container mx-center my-3 rounded-2xl text-white bg-tombol border border-8 item-center">Masuk</button>
							
		</form>
	</div>
</section>
    );
};
export default Login;