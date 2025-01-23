document.addEventListener('DOMContentLoaded', function () {
  // --- Navbar Responsivo ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  let menuTimeout;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');

      // Se o menu for aberto, definir um timeout para fechar
      if (!mobileMenu.classList.contains('hidden')) {
        startMenuTimeout();
      }
    });

    mobileMenu.addEventListener('mouseenter', function () {
      clearMenuTimeout();
    });

    mobileMenu.addEventListener('mouseleave', function () {
      startMenuTimeout();
    });

    function startMenuTimeout() {
      clearTimeout(menuTimeout);
      menuTimeout = setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 3000); // 3000 milissegundos = 3 segundos
    }
    function clearMenuTimeout() {
      clearTimeout(menuTimeout);
    }
  }

  // --- Modais ---
  const cartModal = document.getElementById('cart-modal');
  const profileModal = document.getElementById('profile-modal');
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  const ordersModal = document.getElementById('orders-modal');
  const reportsModal = document.getElementById('reports-modal');


  const openCartButton = document.getElementById('open-cart');
  const mobileOpenCartButton = document.getElementById('mobile-open-cart');
  const closeCartButton = document.getElementById('close-cart');
  const openProfileButton = document.getElementById('open-profile');
  const mobileOpenProfileButton = document.getElementById('mobile-open-profile');
  const closeProfileButton = document.getElementById('close-profile');
  const openLoginButton = document.getElementById('open-login-modal');
  const closeLoginButton = document.getElementById('close-login');
  const openRegisterButton = document.getElementById('open-register-modal');
  const closeRegisterButton = document.getElementById('close-register');
  const openOrdersButton = document.getElementById('open-orders-modal');
  const closeOrdersButton = document.getElementById('close-orders');
  const openReportsButton = document.getElementById('open-reports-modal');
  const closeReportsButton = document.getElementById('close-reports');

  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
    }
  }

  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block';
    }
  }


  if (openCartButton) {
    openCartButton.addEventListener('click', function (event) {
      event.preventDefault();
      openModal(cartModal);
    });
  }
  if (mobileOpenCartButton) {
    mobileOpenCartButton.addEventListener('click', function (event) {
      event.preventDefault();
      openModal(cartModal);
    });
  }
  if (closeCartButton) {
    closeCartButton.addEventListener('click', function () {
      closeModal(cartModal);
    });
  }
  if (openProfileButton) {
    openProfileButton.addEventListener('click', function (event) {
      event.preventDefault();
      openModal(profileModal);

      const profileContent = document.getElementById('profile-modal').querySelector('.modal-content')
      profileContent.innerHTML = `
                <span class="close" id="close-profile">×</span>
              <h2 class="text-2xl font-bold mb-4">Perfil do Usuário</h2>
           
               <div class="flex flex-col space-y-4">
                  <button id="open-login-modal" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                  <button id="open-register-modal" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Cadastrar</button>
                  <button id="open-orders-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Meus Pedidos</button>
                    <button id="open-reports-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Relatórios</button>
                </div>
              `;
      addModalProfileListeners();
    });
  }
  if (mobileOpenProfileButton) {
    mobileOpenProfileButton.addEventListener('click', function (event) {
      event.preventDefault();
      openModal(profileModal);

      const profileContent = document.getElementById('profile-modal').querySelector('.modal-content')
      profileContent.innerHTML = `
                <span class="close" id="close-profile">×</span>
              <h2 class="text-2xl font-bold mb-4">Perfil do Usuário</h2>
           
               <div class="flex flex-col space-y-4">
                  <button id="open-login-modal" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                  <button id="open-register-modal" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Cadastrar</button>
                  <button id="open-orders-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Meus Pedidos</button>
                    <button id="open-reports-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Relatórios</button>
                </div>
              `;
      addModalProfileListeners();
    })
  }
  if (closeProfileButton) {
    closeProfileButton.addEventListener('click', function () {
      closeModal(profileModal);
      const profileContent = document.getElementById('profile-modal').querySelector('.modal-content')
      profileContent.innerHTML = `
        <span class="close" id="close-profile">×</span>
        <h2 class="text-2xl font-bold mb-4">Perfil do Usuário</h2>
        
          <div class="flex flex-col space-y-4">
              <button id="open-login-modal" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
              <button id="open-register-modal" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Cadastrar</button>
              <button id="open-orders-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Meus Pedidos</button>
                <button id="open-reports-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Relatórios</button>
          </div>
      `;
      addModalProfileListeners()
    });
  }
  if (openLoginButton) {
    openLoginButton.addEventListener('click', function (event) {
      event.preventDefault();
      closeModal(profileModal);
      openModal(loginModal);
    });
  }
  if (closeLoginButton) {
    closeLoginButton.addEventListener('click', function () {
      closeModal(loginModal);
    });
  }
  if (openRegisterButton) {
    openRegisterButton.addEventListener('click', function (event) {
      event.preventDefault();
      closeModal(profileModal);
      openModal(registerModal);
    });
  }
  if (closeRegisterButton) {
    closeRegisterButton.addEventListener('click', function () {
      closeModal(registerModal);
    });
  }

  if (openOrdersButton) {
    openOrdersButton.addEventListener('click', function (event) {
      event.preventDefault();
      closeModal(profileModal);
      openModal(ordersModal);
      updateOrderList(); // Atualiza ao abrir o modal
    });
  }
  if (closeOrdersButton) {
    closeOrdersButton.addEventListener('click', function () {
      closeModal(ordersModal);
      orderDetailsContainer.innerHTML = ''; // Limpa detalhes
    });
  }
  if (openReportsButton) {
    openReportsButton.addEventListener('click', function (event) {
      event.preventDefault();
      closeModal(profileModal);
      openModal(reportsModal);
      updateReports();
    });
  }
  if (closeReportsButton) {
    closeReportsButton.addEventListener('click', function () {
      closeModal(reportsModal)
    });
  }
  // --- Categorias de Produtos ---
  const categoryButtons = document.querySelectorAll('.category-btn');
  const productList = document.getElementById('product-list');
  const productCards = document.querySelectorAll('.product-card');

  function filterProducts(category) {
    productCards.forEach(card => {
      if (category === 'todos' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  categoryButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const category = this.getAttribute('data-category');
      filterProducts(category);
    });
  });
  // --- Descrição do produto ---
  const showDescriptionButtons = document.querySelectorAll('.show-description-btn');
  showDescriptionButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const productCard = this.closest('.product-card');
      const productDescription = productCard.querySelector('.product-description');
      productDescription.style.display = productDescription.style.display === 'none' ? 'block' : 'none';
      this.textContent = productDescription.style.display === 'none' ? 'Ver Mais' : 'Ver Menos';
    })
  });
  // --- Adicionar itens ao carrinho ---
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  let cart = [];

  function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    const hasPromotion = true; // Defina se há uma promoção ativa
    cart.forEach((item, index) => {
      const originalPrice = parseFloat(item.price.replace("R$", ""));
      const discountedPrice = hasPromotion ? originalPrice * 0.9 : originalPrice;
      const listItem = document.createElement('li');
      listItem.classList.add('flex', 'items-center', 'justify-between', 'py-2', 'border-b');
      listItem.innerHTML = `
         <span>${item.name} - R$${discountedPrice.toFixed(2)}</span>
          <button class="text-red-500 hover:text-red-700 remove-cart-item" data-index="${index}">Remover</button>
     `;
      cartItemsList.appendChild(listItem);
      totalPrice += discountedPrice;
    });
    cartTotalElement.textContent = `R$${totalPrice.toFixed(2)}`;

    //Eventos para os botoes de remover os produtos do carrinho.
    const removeButtons = document.querySelectorAll('.remove-cart-item');
    removeButtons.forEach(button => {
      button.addEventListener('click', function () {
        const indexToRemove = this.getAttribute('data-index');
        cart.splice(indexToRemove, 1);
        updateCartDisplay();
      })
    })
  }
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const productName = this.closest('.bg-white').querySelector('h3').textContent;
      const productPriceElement = this.closest('.bg-white').querySelector('p');
      const productPrice = productPriceElement.textContent;
      // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
      // por exemplo, exibir uma mensagem de sucesso ou atualizar um carrinho
      cart.push({ name: productName, price: productPrice });
      updateCartDisplay();
      console.log(`Produto "${productName}" ( ${productPrice} ) adicionado ao carrinho.`);
      alert(`Produto "${productName}" ( ${productPrice} ) adicionado ao carrinho.`);
    });
  });
  // --- Checkout ---
  const completeOrderButton = document.getElementById('complete-order');
  const checkoutForm = document.getElementById('checkout-form');
  const orderList = document.getElementById('order-list');
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  function updateOrderList() {
    const selectedStatus = orderStatusFilter.value;
    orderList.innerHTML = ""; // Limpa a lista antes de adicionar os pedidos

    orders.forEach((order, index) => {
      if (selectedStatus === 'todos' || order.status === selectedStatus) {
        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'items-center', 'justify-between', 'py-2', 'border-b', 'order-list-item');
        listItem.innerHTML = `
             <span> Pedido ${index + 1}: ${order.items.length} produto(s), Total ${order.total} (${order.status})</span>
             <button class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 order-details-btn" data-index="${index}">Detalhes</button>
         `;
        orderList.appendChild(listItem);
      }
    });

    // Adiciona os listeners de detalhes após recriar a lista
    const orderDetailsButtons = document.querySelectorAll('.order-details-btn');
    orderDetailsButtons.forEach(button => {
      button.addEventListener('click', function () {
        const orderIndex = this.getAttribute('data-index');
        showOrderDetails(orderIndex)
      });
    });
  }

  if (completeOrderButton) {
    completeOrderButton.addEventListener('click', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const payment = document.getElementById('payment').value;

      if (!name || !address || !payment) {
        alert('Por favor, preencha todas as informações de checkout!');
        return;
      }

      if (cart.length === 0) {
        alert("Não é possível finalizar o pedido, carrinho vazio");
        return;
      }
      let totalPrice = 0;
      cart.forEach(item => {
        const originalPrice = parseFloat(item.price.replace("R$", ""));
        totalPrice += originalPrice * 0.9;
      });

      const newOrder = {
        items: cart,
        total: `R$${totalPrice.toFixed(2)}`,
        status: 'Processando',
        time: Date.now()
      };

      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      updateOrderList();

      alert('Pedido Realizado! Verifique a seção de "Meus Pedidos" para mais informações');
      console.log("Pedido realizado: ", { name, address, payment, cart });
      cart = [];
      updateCartDisplay();
      closeModal(cartModal);
      checkoutForm.reset();
    });
  }
  // --- Login e Cadastro ---
  const submitLoginButton = document.getElementById('submit-login');
  const submitRegisterButton = document.getElementById('submit-register');
  let loggedUserName = null;
  let loggedUserEmail = null;

  if (submitLoginButton) {
    submitLoginButton.addEventListener('click', function (event) {
      event.preventDefault();
      const loginEmail = document.getElementById('login-email').value;
      const loginPassword = document.getElementById('login-password').value;

      if (!loginEmail || !loginPassword) {
        alert('Por favor, preencha todos os campos de login');
      } else {
        // Simular Login (armazenar email)
        loggedUserEmail = loginEmail;

        const openProfileButton = document.getElementById('open-profile');
        if (loggedUserName) {
          openProfileButton.textContent = loggedUserName;
        }
        else {
          openProfileButton.textContent = loginEmail;
        }
        const mobileOpenProfileButton = document.getElementById('mobile-open-profile');
        if (loggedUserName) {
          mobileOpenProfileButton.textContent = loggedUserName;
        }
        else {
          mobileOpenProfileButton.textContent = loginEmail;
        }
        alert('Login efetuado com sucesso');
        console.log({ loginEmail, loginPassword });
        closeModal(loginModal);
        document.getElementById('login-form').reset();

        const profileContent = document.getElementById('profile-modal').querySelector('.modal-content');
        profileContent.innerHTML = `
                  <span class="close" id="close-profile">×</span>
                 <h2 class="text-2xl font-bold mb-4">Perfil de ${loggedUserName ? loggedUserName : loggedUserEmail}</h2>
                   <p>Email: ${loggedUserEmail}</p>
                   <button id="back-to-profile" class="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Voltar</button>
               `;

        const backToProfile = document.getElementById('back-to-profile');
        backToProfile.addEventListener('click', function () {
          const profileContent = document.getElementById('profile-modal').querySelector('.modal-content')
          profileContent.innerHTML = `
                                 <span class="close" id="close-profile">×</span>
                                <h2 class="text-2xl font-bold mb-4">Perfil</h2>
                                
                                    <div class="flex flex-col space-y-4">
                                        <button id="open-login-modal" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                                        <button id="open-register-modal" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Cadastrar</button>
                                        <button id="open-orders-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Meus Pedidos</button>
                                        <button id="open-reports-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Relatórios</button>
                                    </div>
                                 `;
          addModalProfileListeners();
        })
        addModalProfileListeners();
      }
    });
  }
  if (submitRegisterButton) {
    submitRegisterButton.addEventListener('click', function (event) {
      event.preventDefault();
      const registerName = document.getElementById('register-name').value;
      const registerEmail = document.getElementById('register-email').value;
      const registerPassword = document.getElementById('register-password').value;

      if (!registerName || !registerEmail || !registerPassword) {
        alert('Por favor, preencha todos os campos de cadastro');
      } else {
        // Simular Cadastro (armazenar nome e email)
        loggedUserName = registerName;
        loggedUserEmail = registerEmail;
        alert('Cadastro efetuado com sucesso');
        console.log({ registerName, registerEmail, registerPassword });
        closeModal(registerModal);
        document.getElementById('register-form').reset();
      }

    });
  }
  function addModalProfileListeners() {
    const openLoginButton = document.getElementById('open-login-modal');
    const closeLoginButton = document.getElementById('close-login');
    const openRegisterButton = document.getElementById('open-register-modal');
    const closeRegisterButton = document.getElementById('close-register');
    const openOrdersButton = document.getElementById('open-orders-modal');
    const closeOrdersButton = document.getElementById('close-orders');
    const openReportsButton = document.getElementById('open-reports-modal');
    const closeReportsButton = document.getElementById('close-reports');
    const closeProfileButton = document.getElementById('close-profile');

    if (openLoginButton) {
      openLoginButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(profileModal);
        openModal(loginModal);
      });
    }
    if (closeLoginButton) {
      closeLoginButton.addEventListener('click', function () {
        closeModal(loginModal);
      });
    }
    if (openRegisterButton) {
      openRegisterButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(profileModal);
        openModal(registerModal);
      });
    }
    if (closeRegisterButton) {
      closeRegisterButton.addEventListener('click', function () {
        closeModal(registerModal);
      });
    }
    if (openOrdersButton) {
      openOrdersButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(profileModal);
        openModal(ordersModal);
        updateOrderList();
      });
    }
    if (closeOrdersButton) {
      closeOrdersButton.addEventListener('click', function () {
        closeModal(ordersModal);
        orderDetailsContainer.innerHTML = ''; // Limpa detalhes
      });
    }
    if (openReportsButton) {
      openReportsButton.addEventListener('click', function (event) {
        event.preventDefault();
        closeModal(profileModal);
        openModal(reportsModal);
        updateReports();
      });
    }
    if (closeReportsButton) {
      closeReportsButton.addEventListener('click', function () {
        closeModal(reportsModal)
      });
    }
    if (closeProfileButton) {
      closeProfileButton.addEventListener('click', function () {
        closeModal(profileModal);
        const profileContent = document.getElementById('profile-modal').querySelector('.modal-content')
        profileContent.innerHTML = `
              <span class="close" id="close-profile">×</span>
              <h2 class="text-2xl font-bold mb-4">Perfil</h2>
             
               <div class="flex flex-col space-y-4">
                   <button id="open-login-modal" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                   <button id="open-register-modal" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Cadastrar</button>
                   <button id="open-orders-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Meus Pedidos</button>
                     <button id="open-reports-modal" class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Relatórios</button>
               </div>
           `;
        addModalProfileListeners()
      });
    }
  }
  const orderStatusFilter = document.getElementById('order-status-filter');
  const orderDetailsContainer = document.getElementById('order-details-container');

  function showOrderDetails(index) {
    const order = orders[index];
    orderDetailsContainer.innerHTML = `
        <h3 class="text-xl font-bold mt-4 mb-2">Detalhes do Pedido ${index + 1}</h3>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Total:</strong> ${order.total}</p>
          
          <h4 class="text-lg font-semibold mt-2 mb-1">Itens:</h4>
           <ul>
          ${order.items.map(item => `<li>${item.name} - ${item.price}</li>`).join('')}
          </ul>
          
           <button id="close-order-details-btn" class="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Voltar</button>
      `;
    const closeDetailsButton = document.getElementById('close-order-details-btn');
    closeDetailsButton.addEventListener('click', function () {
      orderDetailsContainer.innerHTML = '';
    })
  }

  const reportsContent = document.getElementById('reports-content');
  function updateReports() {
    // Simula dados de relatórios (pode ser qualquer lógica)
    const totalSales = orders.length;
    const activeCustomers = 5;
    let mostSoldProduct = 'Nenhum produto vendido ainda';
    if (orders.length > 0) {
      const itemsSold = orders.flatMap(order => order.items.map(item => item.name));
      const counts = {};
      itemsSold.forEach(item => counts[item] = (counts[item] || 0) + 1);

      mostSoldProduct = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }
    reportsContent.innerHTML = `
          <p>Vendas no último mês: ${totalSales}</p>
           <p>Clientes ativos: ${activeCustomers}</p>
           <p>Produto mais vendido: ${mostSoldProduct}</p>
         `;
  }

  orderStatusFilter.addEventListener('change', function() {
    updateOrderList(); // Atualiza a lista ao mudar o filtro
  });
  updateOrderList();
  updateReports();
  // Atualiza a lista de pedidos a cada minuto
  setInterval(updateOrderList, 60 * 1000);
});