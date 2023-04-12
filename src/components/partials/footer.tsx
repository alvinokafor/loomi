import Container from "../layouts/container";

export default function Footer() {
  const date = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    new Date()
  );

  return (
    <footer className="mb-0 mt-28 bg-seasalt">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-12 lg:flex-row lg:pt-20">
          <div>
            <h4 className="mb-8 text-sm font-semibold uppercase">
              Help & Support
            </h4>
            <ul className="space-y-5 text-xs text-brown">
              <li>Help</li>
              <li>Track Order</li>
              <li>Delivery & Returns</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-semibold uppercase">About</h4>
            <ul className="space-y-5 text-xs text-brown">
              <li>About Us</li>
              <li>Carrers</li>
              <li>Corporate responsibility</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-semibold uppercase">
              More from loomi
            </h4>
            <ul className="space-y-5 text-xs text-brown">
              <li>Loomi mobile app</li>
              <li>Gift Vouchers</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-semibold uppercase">
              Shopping from
            </h4>
            <ul className="text-xs text-brown">
              <li>
                Nigeria
                <span className="ml-2 text-primary">
                  <button className="uppercase">Change</button>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-4 py-20">
          <img src="/icons/visa.svg" alt="" />
          <img src="/icons/mastercard.svg" alt="" />
          <img src="/icons/paypal.svg" alt="" />
          <img src="/icons/american-express.svg" alt="" />
        </div>
      </Container>
      <div className="bg-[#F7F4F2] py-8 text-xs">
        <Container>
          <div className="flex items-center justify-between">
            <p className="text-brown">©️{date} Lommi</p>

            <ul className="flex justify-center gap-x-12  text-center text-primary ">
              <li>Privacy & Cookies</li>
              <li>T's and C's</li>
              <li className="hidden lg:block">Accessibilty</li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
