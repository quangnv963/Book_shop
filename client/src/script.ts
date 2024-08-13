let count = 0;

// Nếu nút "Thêm vào giỏ hàng" được nhấp
document.querySelectorAll('.cart-btn').forEach((cartBtn) => {
  cartBtn.addEventListener('click', () => {
    const cart = document.querySelector('.cart-nav');

    // Tìm ảnh của thẻ mà người dùng đã nhấp vào
    const imgtodrag = cartBtn.closest('.card').querySelector('img');

    if (imgtodrag) {
      // Sao chép ảnh
      const imgclone = imgtodrag.cloneNode(true) as HTMLImageElement;
      imgclone.style.opacity = '0.8';
      imgclone.style.position = 'absolute';
      imgclone.style.height = '150px';
      imgclone.style.width = '150px';
      imgclone.style.zIndex = '100';

      const imgOffset = imgtodrag.getBoundingClientRect();
      imgclone.style.top = `${imgOffset.top}px`;
      imgclone.style.left = `${imgOffset.left}px`;

      document.body.appendChild(imgclone);

      const cartOffset = cart.getBoundingClientRect();
      const animationDuration = 1000;
      const easeFunction = 'easeInOutExpo';

      imgclone.animate(
        [
          {
            top: `${imgOffset.top}px`,
            left: `${imgOffset.left}px`,
            width: '150px',
            height: '150px',
          },
          {
            top: `${cartOffset.top + 20}px`,
            left: `${cartOffset.left + 30}px`,
            width: '75px',
            height: '75px',
          },
        ],
        {
          duration: animationDuration,
          easing: easeFunction,
        }
      );

      setTimeout(() => {
        count++;
        document.querySelector('.cart-nav .item-count')!.textContent = count.toString();
      }, animationDuration + 500);

      imgclone.animate(
        [
          {
            width: '75px',
            height: '75px',
          },
          {
            width: '0',
            height: '0',
          },
        ],
        {
          duration: animationDuration,
          complete() {
            imgclone.remove();
          },
        }
      );
    }
  });
});
