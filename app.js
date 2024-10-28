document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');
    const retryButton = document.getElementById('retry');
  
    function checkLocationPermission() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Permission granted: Show the main content
          overlay.classList.add('hidden');
          content.classList.remove('hidden');
        },
        (error) => {
          // Permission denied or error: Keep showing the overlay
          console.warn('Location access denied:', error.message);
          overlay.classList.remove('hidden');
          content.classList.add('hidden');
        }
      );
    }
  
    retryButton.addEventListener('click', checkLocationPermission);
  
    // Check location permission on load
    checkLocationPermission();
  });