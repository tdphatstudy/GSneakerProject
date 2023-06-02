# G SNEAKER WEBAPP
Đây là ứng dụng web shopping cart đơn giản, với các chức năng cơ bản: thêm product vào giỏ hàng, chỉnh sửa số lượng item, xóa item khỏi cart.
## URL Vercel: https://g-sneaker-project-jb68z8kat-tdphatstudy.vercel.app/
![image](https://github.com/tdphatstudy/GSneakerProject/assets/124871402/925f9fa5-063b-4ba7-b165-0a4ee8127492)

# Các tính năng
- [x] Hiển thị thông tin sản phẩm: tên, mô tả, giá, hình ảnh và nút `Add To Cart`.
- [x]  Thêm sản phẩm vào giỏ khi nhấn nút `Add To Cart`.
- [x]  Chặn người dùng thêm các sản phẩm đã nằm trong giỏ hàng.
- [x] Hiển thị thông item trong giỏ hàng
- [x] Thêm bớt số lượng sản phẩm của item (Xóa khi số lượng về 0), xóa item.
- [x] Lưu thông tin sản phẩm vào vào local.
- [x] Chuyển đến trang 404 nếu url không hợp lệ. 
- [x] Responsive (80%) 
- [x] Animation   
- [x] Upload source lên vercal ( Do heruko không còn miễn phí)/

# Các phiên bản
Việc run  hoặc build với các phiên bản khác có thể gây ra lỗi. Nếu quá trình cài đặt có lỗi hãy thiết lập lại để phù hợp.
 - NODEJS : v18.13.0.
 - REACTJS: 18.2.0.
# Cài đặt ở local và chạy
 - Bước 1: Cần có `git` để thực hiện. [URL: https://git-scm.com/downloads]

![image](https://github.com/tdphatstudy/GSneakerProject/assets/124871402/a73db8ed-0a56-4b2d-abb1-7586530cdeff)

 - Bước 2: Đến nên muốn chứa repo.
 - Bước 3: Dùng lệnh `git clone "https://github.com/tdphatstudy/GSneakerProject.git"`
 - Bước 4: Gõ lệnh `npm install`. Vì để push code nhanh hơn nên thường, chúng ta không push hết code trong project. Mà sẽ bỏ qua `/node_module` chứa các dependecy của project. Vậy khi clone code về hãy gõ lệnh `npm install` để `npm` sẽ check và tải về các dependency còn thiếu so với các khai báo mà chúng ta để trong package.json.
 - Bước 5: Gõ `npm start` để chạy. (mặc định port: 3000)
 - ![image](https://github.com/tdphatstudy/GSneakerProject/assets/124871402/6c011544-e76a-4c06-96e4-0b6973fcf838)
![image](https://github.com/tdphatstudy/GSneakerProject/assets/124871402/09b83024-43a6-496d-8951-f82851f83dcd)

# Các đưa code lên vercel thông qua github của người dùng.
 - Bước 1: Tạo 1 repo trên github.
 - Bước 2: Vào project vừa clone xuống.
 - Bước 3: Sao đó gõ `git remote add <remote name: origin/ hoặc tên tùy ý>  <URL repo của bạn>`.
 - Bước 4: `git push -u <remote name đã đặt ở trên> <branch name>`
 - Bước 5: Try cập `vercel.com`
 - Bước 6: Đăng nhập bằng github.
 - Bước 7: Chọn repo muốn publish và chờ. Nhận được url là đã thành công.
