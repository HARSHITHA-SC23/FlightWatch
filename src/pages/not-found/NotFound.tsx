import './NotFound.css'

export default function NotFound() {
  return (
    <div className='container'>
      <div className='contant_box_404'>
        <h3 className='h2'>Look like you're lost</h3>

        <p>the page you are looking for not avaible!</p>

        <a href='/' className='link_404'>
          Go to Home
        </a>
      </div>
    </div>
  );
}