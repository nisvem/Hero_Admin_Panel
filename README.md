## Hero Admin Panel

Hero Admin Panel is a web-based application for managing a collection of heroes. The application allows users to view, filter, and add heroes based on their elements (fire, water, wind, earth, etc.).

---

## Features

1. **Hero Management**:
   - View a list of heroes with their descriptions and elemental properties.
   - Filter heroes by element (e.g., Fire, Water, Wind, Earth).
   - Add new heroes to the collection.

2. **Filters**:
   - Filters are dynamically applied to categorize heroes by their elements.
   - Available filter options include: All, Fire, Water, Wind, and Earth.

3. **Dynamic UI**:
   - A modern and responsive UI built using React.
   - Elements are styled using dynamic classes for different filters.

---

## File Structure

The key components of the project are organized as follows:

- **heroes.json**:
  - Contains the data for the list of heroes and their properties.
  - Includes filters for categorizing heroes.

- **src/actions**:
  - Contains Redux actions used for state management.

- **src/assets**:
  - Holds static assets like images or icons used within the application.

- **src/components**:
  - Core React components of the application.

    - **app**:
      - Main application component that integrates all parts.

    - **heroesAddForm**:
      - A form component for adding new heroes to the collection.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nisvem/Hero_Admin_Panel.git
   cd Hero_Admin_Panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Data File (heroes.json)

The `heroes.json` file contains the following structure:

- **heroes**: A list of heroes with their `id`, `name`, `description`, and `element`.
- **filters**: A list of filters for categorizing heroes by their elemental properties.

Example:
```json
{
  "heroes": [
    {
      "id": "1",
      "name": "Первый герой",
      "description": "Первый герой в рейтинге!",
      "element": "fire"
    }
  ],
  "filters": [
    {
      "name": "fire",
      "label": "Огонь",
      "className": "btn-danger",
      "id": "3e2e"
    }
  ]
}
```

---

## Russian Version

# Hero Admin Panel

Hero Admin Panel — это веб-приложение для управления коллекцией героев. Приложение позволяет пользователям просматривать, фильтровать и добавлять героев в зависимости от их стихий (огонь, вода, ветер, земля и т. д.).

---

## Особенности

1. **Управление героями**:
   - Просмотр списка героев с их описаниями и стихийными свойствами.
   - Фильтрация героев по стихиям (например, Огонь, Вода, Ветер, Земля).
   - Добавление новых героев в коллекцию.

2. **Фильтры**:
   - Фильтры динамически применяются для классификации героев по их стихиям.
   - Доступные варианты фильтров: Все, Огонь, Вода, Ветер, Земля.

3. **Динамический интерфейс**:
   - Современный и адаптивный интерфейс, построенный с использованием React.
   - Стилизован с использованием динамических классов для различных фильтров.

---

## Структура файлов

Ключевые компоненты проекта организованы следующим образом:

- **heroes.json**:
  - Содержит данные со списком героев и их свойствами.
  - Включает фильтры для классификации героев.

- **src/actions**:
  - Содержит Redux-действия, используемые для управления состоянием.

- **src/assets**:
  - Хранит статические ресурсы, такие как изображения или иконки, используемые в приложении.

- **src/components**:
  - Основные React-компоненты приложения.

    - **app**:
      - Основной компонент приложения, интегрирующий все части.

    - **heroesAddForm**:
      - Компонент формы для добавления новых героев в коллекцию.

---

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/nisvem/Hero_Admin_Panel.git
   cd Hero_Admin_Panel
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите сервер разработки:
   ```bash
   npm start
   ```

4. Откройте приложение в браузере:
   ```
   http://localhost:3000
   ```

---

## Файл данных (heroes.json)

Файл `heroes.json` содержит следующую структуру:

- **heroes**: Список героев с их `id`, `name`, `description` и `element`.
- **filters**: Список фильтров для классификации героев по их стихийным свойствам.

Пример:
```json
{
  "heroes": [
    {
      "id": "1",
      "name": "Первый герой",
      "description": "Первый герой в рейтинге!",
      "element": "fire"
    }
  ],
  "filters": [
    {
      "name": "fire",
      "label": "Огонь",
      "className": "btn-danger",
      "id": "3e2e"
    }
  ]
}
```
