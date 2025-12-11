# TV Announcement App

A Next.js frontend application for displaying college announcements on TV screens throughout the campus.

## Features

- **Persistent Header** with logo, date/time display, and weather information
- **Grid Layout** optimized for TV display (2 columns × 2 rows)
- **Featured Announcement** card (spans 2 rows)
- **Emergency Announcement** mode with red border and alert banner
- **Color-coded Categories** for different announcement types

## Components

### Header
Located in `app/components/Header.tsx`
- Displays college logo (left)
- Real-time date and time (center)
- Weather information (right)

### AnnouncementCard
Located in `app/components/AnnouncementCard.tsx`

Reusable card component that supports:
- Regular announcements
- Featured announcements (larger size)
- Emergency announcements (red border + "Important" banner)

**Props:**
- `id`: Unique identifier
- `icon`: Emoji or icon character
- `title`: Announcement title
- `description`: Announcement details
- `category`: Category label (shown at bottom)
- `backgroundColor`: Card background color (hex)
- `isFeatured`: Boolean for featured card
- `isEmergency`: Boolean for emergency state

## Layout

The grid consists of 5 cards:
1. **Featured Card** - Spans 2 rows (left column)
2. **Standard Cards** - 4 cards in the right column (2×2 grid)

## Emergency Mode

To activate emergency mode for an announcement, set `isEmergency: true`:

```tsx
{
  id: 'emergency_1',
  icon: '🎓',
  title: 'Guest Lecture: AI Ethics',
  description: 'Dr. Jane Smith will be giving a talk on the ethics of artificial intelligence.',
  category: 'Academic',
  backgroundColor: '#673AB7',
  isEmergency: true,  // Activates emergency styling
}
```

Emergency styling includes:
- Dark background (#333333)
- Red border (#F44336)
- Red "Important" banner at top with 🚨 icon
- Higher z-index for visibility

## Theme

Based on the JSON specification:
- **Background**: #1A1A1A (dark solid)
- **Text Color**: #FFFFFF (white)
- **Font**: Sans-serif, high readability

### Card Colors
- Featured: #1E88E5 (Blue)
- Standard 1: #FF9800 (Orange)
- Standard 2: #4CAF50 (Green)
- Standard 3: #673AB7 (Purple)
- Standard 4: #FFC107 (Amber)

## Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Customization

### Update Announcements
Edit the `announcements` array in `app/page.tsx` to modify the displayed announcements.

### Change Logo
Replace `/public/logo.svg` with your college logo.

### Update Weather
The weather display in the Header component is currently static. You can integrate a weather API to display real-time weather data.

## Next Steps

- Add animations and transitions
- Integrate with backend API for dynamic announcements
- Add real-time weather API integration
- Implement auto-rotation for multiple announcements
- Add fade-in/fade-out transitions between announcement changes
