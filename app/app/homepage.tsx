export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#1f2937', fontSize: '36px', marginBottom: '20px' }}>
          Digital Giant Global Limited
        </h1>
        <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
          Professional IT Solutions for Your Business
        </p>
        
        <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '24px', marginBottom: '20px' }}>Contact Information</h2>
          <p><strong>Address:</strong> 17/F, 80 Gloucester Road, Wan Chai, Hong Kong</p>
          <p><strong>Phone:</strong> +852 9790 8638</p>
          <p><strong>Email:</strong> info@digitalgiantglobal.com</p>
          <p><strong>Business Hours:</strong> Monday - Friday: 9:30 AM - 6:30 PM HKT</p>
        </div>
        
        <div style={{ backgroundColor: '#f9fafb', padding: '30px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1f2937', fontSize: '24px', marginBottom: '20px' }}>Our Services</h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <li>Web Development</li>
            <li>CRM Solutions</li>
            <li>IT Consulting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
